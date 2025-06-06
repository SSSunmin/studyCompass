import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {useEffect, useState} from "react";
import {Get} from "@/axios.ts";
import MemoryStudyList from "@/views/my-page/MemoryStudyList.tsx";
import HowToStudyList from "@/views/my-page/HowToStudyList.tsx";

interface MyInfoData{
    "userSid": number,
    "loginId": string
    "userNm": string,
    "userNick": string,
    "userEmail": string,
    "regDt": string,
    "updDt": string,
    "certificationCount": number,
    "knowHowCount": number,
    "monthlyTimeDuration": {
        "hours": number,
        "minutes": number,
        "seconds": number
    },
    "todayTimeDuration": {
        "hours": number,
        "minutes": number,
        "seconds": number
    }
}

const MyPage = () => {
    const [userInfo, setUserInfo] = useState<MyInfoData|null>(null);

    const getMyInfo =async ()=>{
        const result = await Get<{data:{data:{value:MyInfoData}}}>('/v1/myInfo')
        setUserInfo(result.data.data.value)
    }

    useEffect(() => {
        getMyInfo()
    }, []);

    return (
        <div className={"flex gap-[25px] min-h-[calc(100vh-60px)] py-[50px] px-[361px] bg-[#F8F9FB]"}>
            <section>
                <section className={"h-[328px] flex flex-col gap-[10px] items-center w-[300px] py-[42px] bg-white rounded-[24px] border border-[#D9D9D9]"}>
                    <div  className={'relative w-[140px] h-[140px]'}>
                        <img src={"/profile.jpeg"} alt='profile' className={"absolute top-0 left-0 w-[140px] h-[140px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)]"}/>
                    </div>

                    <p className={'font-bold'}>{userInfo?.userNick}</p>
                    <div className={'flex items-center gap-[8px]'}>
                        <p className={'font-semibold'}>이름</p>
                        <p>{userInfo?.userNm}</p>
                    </div>
                    <div className={'flex items-center gap-[8px] '}>
                        <p className={'font-semibold'}>아이디</p>
                        <p>{userInfo?.loginId}</p>
                    </div>
                </section>
                <section className={"flex justify-center w-[300px] py-[42px] bg-white rounded-[24px] border border-[#D9D9D9] mt-[20px]"}>
                    <div className="flex items-center gap-[20px]">
                        <div className={'flex flex-col  items-center'}>
                            <p className={'font-bold text-[14px]'}>오늘 공부 시간</p>
                            <p className={'font-bold text-[30px] text-[#4434E2]'}>{userInfo?.todayTimeDuration.hours.toString().padStart(2,"0")}:{userInfo?.todayTimeDuration.minutes.toString().padStart(2,"0")}:{userInfo?.todayTimeDuration.seconds.toString().padStart(2,"0")}</p>
                        </div>
                        <div className={'flex flex-col items-center'}>
                            <p className={'font-bold text-[14px]'}>이번 달 공부 시간</p>
                            <p className={'font-bold text-[30px] text-[#4434E2] '}>{userInfo?.monthlyTimeDuration.hours.toString().padStart(2,"0")}:{userInfo?.monthlyTimeDuration.minutes.toString().padStart(2,"0")}:{userInfo?.monthlyTimeDuration.seconds.toString().padStart(2,"0")}</p>
                        </div>
                    </div>
                </section>

            </section>

            <Tabs defaultValue="studyLog" className="w-[873px]">
                <TabsList className={'border-b border-[#D9D9D9]'}>
                    <TabsTrigger value="studyLog">공부 인증 글 <div className={"bg-[#25252F] text-white rounded-[16px] px-[8px] font-bold group-data-[state=active]:bg-[#4434E2] "}>{userInfo?.certificationCount}</div></TabsTrigger>
                    <TabsTrigger value="studyMethod">공부 방법 글 <div className={"bg-[#25252F] text-white rounded-[16px] px-[8px] font-bold group-data-[state=active]:bg-[#4434E2] "}>{userInfo?.knowHowCount}</div></TabsTrigger>
                </TabsList>
                <TabsContent className={'flex flex-col gap-[8px]'} value="studyLog"><MemoryStudyList /></TabsContent>
                <TabsContent className={'flex flex-col gap-[8px]'} value="studyMethod"><HowToStudyList /></TabsContent>
            </Tabs>
        </div>
    );
};

export default MyPage;