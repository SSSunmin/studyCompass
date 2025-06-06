import {useNavigate} from "react-router-dom";
import Card from "@/components/Card.tsx";
import {useEffect, useState} from "react";
import {Get} from "@/axios.ts";
import Pagination   from "@/components/Pagination.tsx";

export interface Pagination {
    "page": number,
    "size": number,
    "totalElements": number,
    "totalPage": number,
    "currentElements": number,
    "currentPage": number,
    "orderBy": string
    "sortBy": string,
    "limit": number,
}

export interface StudyPost {
    pagination:Pagination
    value:StudyPostData[]
}

export interface StudyPostData {
    "regDt": string,
    "updDt": string,
    "regUser": {
        "userSid": number,
        "loginId":  string,
        "userNm":  string,
    },
    "updUser": {
        "userSid": number,
        "loginId":  string,
        "userNm":  string,
    },
    "boardSid": number,
    "userSid": number,
    "title": string,
    "content": string,
    "fileList": [
        {
            "regDt": string,
            "updDt":string,
            "regUser": {
                "userSid": number,
                "loginId": string,
                "userNm": string
            },
            "updUser": {
                "userSid": number,
                "loginId":string,
                "userNm": string
            },
            "boardFileSid": number,
            "boardSid": number,
            "originFileName": string,
            "filePath": string,
            "srcPath": string
        }
    ]
}

const MemoryStudy = () => {
    const [page, setPage] = useState(0);
    const [list , setList] = useState<StudyPostData[]>([]);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate();
    const getMemoryStudyList = async ()=>{
        const result = await Get<{ data: { data:StudyPost } }>(`/v1/study/certification?size=10&page=${page+1}&sort=regDt,desc`);
        setList(result.data.data.value)
        setTotalPage(result.data.data.pagination.totalPage)
    }

    useEffect(() => {
        getMemoryStudyList()
    }, []);
    return (
        <div className=" ml-auto mr-auto mt-[76px] px-[361px]">
                <div className={'w-full mb-[16px]'}>
                    <button
                        onClick={() => navigate('/memory-study/create')}
                        className="flex gap-[10px] bg-[#646371] text-white p-[10px] cursor-pointer  rounded-[12px] ml-auto"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M14.2999 19.5516H20.2999M4.69995 19.5516L9.06594 18.6718C9.29771 18.6251 9.51053 18.511 9.67767 18.3438L19.4513 8.56474C19.9199 8.09588 19.9196 7.33589 19.4506 6.86743L17.3802 4.79936C16.9114 4.33109 16.1518 4.33141 15.6834 4.80007L5.90871 14.5801C5.7419 14.747 5.628 14.9594 5.58125 15.1907L4.69995 19.5516Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        글쓰기
                    </button>
                </div>

            <div className="w-full flex flex-wrap  gap-[12px]">
                {list.map((post) => (
                    <Card key={post.boardSid} post={post} />
                ))}
            </div>
            <div className={'mt-auto'}>
                {
                    list.length > 0 &&  <Pagination
                        currentPage={page}
                        totalPages={totalPage}
                        onPageChange={(page) => setPage(page)}
                    />
                }
            </div>
        </div>
    );
};

export default MemoryStudy;