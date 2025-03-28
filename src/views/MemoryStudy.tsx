import StudyPost from "@/views/how-to-study/StudyPost.tsx";
import {useNavigate} from "react-router-dom";

interface StudyPost {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    date: string;
}

const samplePosts: StudyPost[] = [
    {
        id: 1,
        title: 'React 공부 5시간 완료!',
        content: '오늘은 React 컴포넌트 구조와 Props 사용법에 대해 깊이 있게 공부했습니다. 상태 관리와 라이프사이클에 대한 이해를 높이는 데 집중했으며, 여러 실습 예제를 통해 개념을 확실히 다졌습니다.',
        imageUrl: 'https://newsimg.hankookilbo.com/2016/04/13/201604131460701467_1.jpg',
        date: '2024-03-15'
    },
    {
        id: 2,
        title: 'Typescript 타입 시스템 마스터',
        content: 'Typescript의 고급 타입 사용법과 제네릭 활용 방법을 공부했습니다. 인터페이스와 타입 별칭의 차이점을 이해하고 실제 프로젝트에 적용해보는 시간을 가졌습니다.',
        imageUrl: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg',
        date: '2024-03-14'
    },
    // 추가 샘플 데이터...
];

const StudyPostCard: React.FC<{ post: StudyPost }> = ({ post }) => {
    return (
        <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover aspect-square"
            />
            <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold truncate flex-1 mr-2">
                        {post.title}
                    </h3>
                    <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 line-clamp-3 flex-1">
                    {post.content}
                </p>
                <button className="mt-4 self-end px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

const MemoryStudy = () => {
    const navigate = useNavigate();
    return (
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">공부 인증 게시판</h1>
            <div className={'w-full flex justify-end'}>
                <button
                    onClick={() => navigate('/memory-study/create')}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors "
                >
                    새 글 작성
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {samplePosts.map((post) => (
                    <StudyPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default MemoryStudy;