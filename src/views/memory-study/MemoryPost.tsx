import React, { useState, ChangeEvent, FormEvent } from 'react';
import {Post} from "@/axios.ts";
import {useNavigate} from "react-router-dom";

interface StudyPost {
    title: string;
    content: string;
    image: File | null;
}

const MemoryPost: React.FC = () => {
    const [post, setPost] = useState<StudyPost>({
        title: '',
        content: '',
        image: null,
    });
    const [preview, setPreview] = useState<string>('');
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost(prevPost => ({ ...prevPost, [name]: value }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPost(prevPost => ({ ...prevPost, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // 여기에 제출 로직 추가
        const form = new FormData();
        form.append(
            "certification",
            new Blob(
                [
                    JSON.stringify({
                        title:post.title,
                        content:post.content,
                    }),
                ],
                { type: "application/json" }
            )
        );
        if (post.image) {
            form.append("file", post.image);
        }
        try {
            await Post("/v1/study/certification", form, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate('/memory-study')
        } catch (err) {
            if(err instanceof Error){
                alert("등록에 실패했습니다.");
            }
        }

    };

    return (
        <div className="max-w-2xl min-h-[calc(100vh-60px)]  mx-auto mt-[60px] p-6 bg-white  shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">공부 인증 게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        제목
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        인증 이미지
                    </label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {preview && (
                    <div className="mb-4">
                        <p className="text-gray-700 font-bold mb-2">이미지 미리보기</p>
                        <img src={preview} alt="Preview" className="max-w-full h-auto rounded-md" />
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
                        내용
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={post.content}
                        onChange={handleInputChange}
                        className="w-full h-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    게시글 등록
                </button>
            </form>
        </div>
    );
};

export default MemoryPost;
