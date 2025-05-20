import {Button} from "@/components/ui/button.tsx";

const StudyPost = () => {
    return (
        <div className={"pt-[16px]"}>
            <div className={"px-[361px]"}>
                <div className={'text-[20px] font-bold px-[24px] py-[16px] border-b border-[#D9D9D9]'}>새 글 작성</div>
            </div>
            <form>
                <input/>
           <textarea></textarea>
                <div className={'flex px-[361px] gap-[10px] w-full h-[50px] bg-[#F8F9FB] items-center justify-end'}>
                    <Button>취소</Button>
                    <Button>등록</Button>
                </div>  
            </form>
          
        </div>
    );
};

export default StudyPost;