import {Button} from "@/components/ui/button.tsx";

const StudyPost = () => {
    return (
        <div className={"pt-[16px] h-[calc(100vh-126px)] "}>
            <div className={"px-[361px]"}>
                <div className={'text-[20px] font-bold px-[24px] py-[16px] border-b border-[#D9D9D9]'}>새 글 작성</div>
            </div>
            <form className={"h-full"}>
                <div className={'ml-auto mr-auto w-[800px] border-b border-[#E1E5E9] px-[24px] py-[16px]'}>
                    <input className={'text-[24px] outline-0'} placeholder={"제목을 입력해 주세요."}/>
                </div>
                <div className={'ml-auto mr-auto w-[800px] px-[36px] pt-[16px] '}>
                    <label htmlFor={"file"} className={"flex items-center justify-center gap-[4px] w-[120px] text-[#A9A9B2] text-[16px] py-[4px] bg-[#EEEDF1]"}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M11.2639 12.9375L9.59583 11.2834C8.7909 10.4851 8.38844 10.086 7.92657 9.94012C7.52037 9.8118 7.08381 9.81652 6.68048 9.9536C6.22188 10.1095 5.82814 10.5172 5.04068 11.3326L1.04409 15.2801M11.2639 12.9375L11.6053 12.599C12.4112 11.7998 12.8141 11.4002 13.2765 11.2543C13.6831 11.126 14.12 11.1311 14.5236 11.2687C14.9824 11.4251 15.3761 11.8339 16.1634 12.6514L17 13.4934M11.2639 12.9375L15.275 16.9565M15.275 16.9565C14.9176 17 14.4543 17 13.8 17H4.2C3.07989 17 2.51984 17 2.09202 16.782C1.71569 16.5903 1.40973 16.2843 1.21799 15.908C1.12796 15.7313 1.07512 15.5321 1.04409 15.2801M15.275 16.9565C15.5293 16.9256 15.7301 16.8727 15.908 16.782C16.2843 16.5903 16.5903 16.2843 16.782 15.908C17 15.4802 17 14.9201 17 13.8V13.4934M1.04409 15.2801C1 14.9221 1 14.4575 1 13.8V4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H13.8C14.9201 1 15.4802 1 15.908 1.21799C16.2843 1.40973 16.5903 1.71569 16.782 2.09202C17 2.51984 17 3.0799 17 4.2V13.4934M14 5.99989C14 7.10446 13.1046 7.99989 12 7.99989C10.8954 7.99989 10 7.10446 10 5.99989C10 4.89532 10.8954 3.99989 12 3.99989C13.1046 3.99989 14 4.89532 14 5.99989Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>이미지 첨부</label>
                    <input id={"file"} type={"file"} className={'hidden'}/>
                </div>
                <div className={'ml-auto mr-auto w-[800px] border-b border-[#E1E5E9] h-[calc(100%-172px)] '}>
                    <textarea className={"w-full h-full resize-none text-[16px] px-[36px] py-[16px] outline-0"} placeholder={"내용을 입력해주세요."}/>
                </div>


                <div className={'flex px-[361px] gap-[10px] w-full h-[50px] bg-[#F8F9FB] items-center justify-end'}>
                    <Button className={'bg-transparent  text-[#737382] shadow-none hover:bg-[#F8F9FB] cursor-pointer'}>취소</Button>
                    <Button className={'bg-[#4434E2] text-white rounded-full px-[24px] hover:bg-[#4434E2] cursor-pointer'}>등록</Button>
                </div>  
            </form>
          
        </div>
    );
};

export default StudyPost;