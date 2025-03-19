import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {NotebookPen, User} from "lucide-react";
import {useModal} from "@/hooks/useModal.ts";
import SignUp from "@/views/SignUp.tsx";
import Login from "@/views/Login.tsx";

const Header = () => {
    const { openModal } = useModal();

    const handleOpenSignUpModal = () => {
        openModal(<SignUp/>);
    };

    const handleOpenLoginModal = () => {
        openModal(<Login/>);
    };
    return (
        <nav className={"fixed w-full top-0 left-0 z-50 "}>
            <ol className={"flex h-[60px] shadow-md items-center justify-between px-[20px]"}>
                <li >
                    <a className={"flex items-center gap-[4px] cursor-pointer"} href={"/"}>
                        <NotebookPen/>
                        <span className={'text- font-semibold'}>Study Compass</span>
                    </a>

                </li>
                <ol className={"flex items-center gap-[10px]"}>
                    <li><a href={"/stop-watch"}>스톱워치</a></li>
                    <li><a href={"/memory-study"}>공부 인증 게시판</a></li>
                    <li><a href={"/how-to-study"}>공부방법</a></li>
                    <DropdownMenu>
                        <DropdownMenuTrigger><div className={'bg-gray-400 rounded-full p-[4px] cursor-pointer'}><User color={'white'}/></div></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className={"cursor-pointer"}><a href={'/my-page'}>마이페이지</a></DropdownMenuItem>
                            <DropdownMenuItem className={"cursor-pointer"} onClick={handleOpenLoginModal}>로그인</DropdownMenuItem>
                            <DropdownMenuItem className={"cursor-pointer"} onClick={handleOpenSignUpModal}>회원가입</DropdownMenuItem>
                            <DropdownMenuItem className={"cursor-pointer"}>로그아웃</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ol>

            </ol>
        </nav>
    );
};

export default Header;