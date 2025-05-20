import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {useModal} from "@/hooks/useModal.ts";
import {useState} from "react";
import EditProfileModal from "@/views/EditProfileModal.tsx";

const DUMMY_LOG = [
    {id:'log_1',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_2',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_3',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_4',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_5',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_6',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_7',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_8',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_9',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_10',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_11',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_12',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_13',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
    {id:'log_14',img:'', title:' 제목입니다.',text:'상세 내용입니다.'},
]

const ListItem = ({id, img, title, text}:{id:string, img:string, title:string, text:string})=>{
    return <div className={'flex items-center gap-[10px] bg-white border border-[#E6E6E6] px-[16px] py-[10px] rounded-[20px]'} onClick={ ()=>console.log(id)}>
            <div>{img.length >0 ?<img src={img} alt={'image'}/>:<div className={'w-[60px] h-[60px] rounded-[12px] bg-[#D9D9D9]'}/>}</div>
        <div><p>{title}</p><p>{text}</p></div>
    </div>
}


const MyPage = () => {
    const { openModal } = useModal();
    const [showEditText, setShowEditText] = useState(false);

    return (
        <div className={"flex gap-[25px] h-full py-[50px] px-[361px] bg-[#F8F9FB]"}>
            <section>
                <section className={"h-[328px] flex flex-col gap-[10px] items-center w-[300px] py-[42px] bg-white rounded-[24px] border border-[#D9D9D9]"}>
                    <div onMouseEnter={()=>setShowEditText(true)} onMouseLeave={()=>setShowEditText(false)} className={'relative w-[140px] h-[140px] cursor-pointer'}>
                        <img src={"/profile.jpeg"} alt='profile'  className={"absolute top-0 left-0 w-[140px] h-[140px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]"}/>
                        {showEditText && <div
                            className={'absolute w-[140px] h-[140px] rounded-full flex items-end justify-center bg-black/60 text-white z-50 text-[20px] font-bold pb-[10px]'}
                            onClick={() => openModal(<EditProfileModal/>)}>편집</div>}
                    </div>
                    

                    <p className={'font-bold'}>공부하자</p>
                    <div className={'flex items-center gap-[8px]'}>
                        <p className={'font-semibold'}>아이디</p>
                        <p>study_master</p>
                    </div>
                    <div className={'flex items-center gap-[8px] '}>
                        <p className={'font-semibold'}>이메일</p>
                        <p>study_master@gmail.com</p>
                    </div>
                </section>
                <section className={"flex justify-center w-[300px] py-[42px] bg-white rounded-[24px] border border-[#D9D9D9] mt-[20px]"}>
                    <div className="flex items-center gap-[20px]">
                        <div className={'flex flex-col  items-center'}>
                            <p className={'font-bold text-[14px]'}>오늘 공부 시간</p>
                            <p className={'font-bold text-[30px] text-[#4434E2]'}>08:03</p>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <p className={'font-bold text-[14px]'}>이번 달 공부 시간</p>
                            <p className={'font-bold text-[30px] text-[#4434E2] '}>65:59</p>
                        </div>
                    </div>
                </section>

            </section>

            <Tabs defaultValue="studyLog" className="w-[873px]">
                <TabsList className={'border-b border-[#D9D9D9]'}>
                    <TabsTrigger value="studyLog">공부 인증 글 <div className={"bg-[#25252F] text-white rounded-[16px] px-[8px] font-bold group-data-[state=active]:bg-[#4434E2] "}>365</div></TabsTrigger>
                    <TabsTrigger value="studyMethod">공부 방법 글 <div className={"bg-[#25252F] text-white rounded-[16px] px-[8px] font-bold group-data-[state=active]:bg-[#4434E2] "}>22</div></TabsTrigger>
                </TabsList>
                <TabsContent className={'flex flex-col gap-[8px]'} value="studyLog">{DUMMY_LOG.map((item)=><ListItem {...item}/>)}</TabsContent>
                <TabsContent className={'flex flex-col gap-[8px]'} value="studyMethod">{DUMMY_LOG.map((item)=><ListItem {...item}/>)}</TabsContent>
            </Tabs>
        </div>
    );
};

export default MyPage;