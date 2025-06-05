import {useParams, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import {Get} from "@/axios.ts";
import {StudyPostData} from "@/views/MemoryStudy.tsx";

const DetailPage = () => {
    const { id } = useParams(); // id는 문자열로 들어옵니다.
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    console.log(page);
    const [content, setContent] = useState<StudyPostData|null>(null);

    const getContent=async (isMemoryPage:boolean)=>{
        if(isMemoryPage){
            const result = await Get<{data:{data:{value:StudyPostData}}}>(`/v1/study/certification/${id}`)
            console.log(result)
            const data = result.data.data.value
            setContent(data)
        }else{
            const result = await  Get<{data:{data:{value:StudyPostData}}}>(`/v1/study/knowhow/${id}`);
            console.log(result)
            const data = result.data.data.value
            setContent(data)
        }
    }
    useEffect(() => {
        if(page === 'memory-study'){
            getContent(true)
        }else{
            getContent(false)
        }
    },[])
    return (
        <div>
            <div className={'relative w-full h-[230px]'}>
                <img                 src={'http://ec2-3-39-191-102.ap-northeast-2.compute.amazonaws.com:8080'+content?.fileList[0].srcPath}
                                     alt={"image"} className={'w-full h-full object-cover'}/>
                <div className={'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-white'}>
                    <p className={'text-[36px] font-bold text-center mb-[15px]'}>{content?.title}</p>
                    <p className={'text-[15px] font-medium text-center'}>{content?.regDt.split('T')[0]}</p>
                </div>

            </div>
            <div className={'ml-auto mr-auto w-[800px] mt-[50px]'}>
                <img                 src={'http://ec2-3-39-191-102.ap-northeast-2.compute.amazonaws.com:8080'+content?.fileList[0].srcPath}
                                     alt={"image"} className={'w-full h-full object-cover'}/>
            </div>

            <div className={'w-[800px] ml-auto mr-auto px-[36px] pt-[16px] pb-[50px] text-[16px] text-[#3F3F49] font-medium break-keep whitespace-pre-line'}>
                {content?.content}
            </div>


        </div>
    );
};

export default DetailPage;
