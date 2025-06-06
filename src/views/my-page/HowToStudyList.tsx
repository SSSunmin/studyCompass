import {Get} from "@/axios.ts";
import {HowtoStudy, HowToStudyData} from "@/views/HowToStudy.tsx";
import {useEffect, useState} from "react";
import Pagination from "@/components/Pagination.tsx";
import {useNavigate} from "react-router-dom";

const HowToStudyList = ()=>{
    const [page, setPage] = useState(0);
    const [list , setList] = useState<HowToStudyData[]>([]);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate();

    const getHowToStudyList =async ()=>{
        const result = await Get<{ data: { data:HowtoStudy } }>(`/v1/myInfo/knowhow?size=10&page=${page+1}&sort=RegDt,DESC`)
        console.log(result)
        setList(result.data.data.value)
        setTotalPage(result.data.data.pagination.totalPage)
    }

    useEffect(() => {
        getHowToStudyList()
    }, []);


    return <div>
        <div className={'flex flex-col gap-[10px]'}>
            {
                list.map((post) => <div className={'flex items-center gap-[10px] bg-white border border-[#E6E6E6] px-[16px] py-[10px] rounded-[20px] cursor-pointer'} onClick={ ()=>navigate(`/detail/${post.knowHowSid}?page=how-to-study`)}>
                        <div className={'w-[60px] h-[60px] rounded-[12px] overflow-hidden'}>{post.fileList[0].srcPath ? <img src={'http://ec2-3-39-191-102.ap-northeast-2.compute.amazonaws.com:8080'+post.fileList[0].srcPath} alt={'image'} className={'w-full h-full'}/>:<div className={'w-[60px] h-[60px] rounded-[12px] bg-[#D9D9D9]'}/>}</div>
                        <div><p>{post.title}</p><p className={'truncate w-[769px]'}>{post.content}</p></div>
                    </div>

                )
            }
        </div>

        {
            list.length > 0 &&  <Pagination
                currentPage={page}
                totalPages={totalPage}
                onPageChange={(page) => setPage(page)}
            />
        }
    </div>
};

export default HowToStudyList;