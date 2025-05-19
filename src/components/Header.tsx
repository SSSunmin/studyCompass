import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User} from "lucide-react";
import {useModal} from "@/hooks/useModal.ts";
import SignUp from "@/views/SignUp.tsx";
import Login from "@/views/Login.tsx";
import {BoardIcon, CheckListIcon, StopWatchIcon} from "@/components/Icons.tsx";
import {useLocation} from "react-router-dom";

const Header = () => {
    const { openModal } = useModal();
    const location = useLocation();
    console.log(location);
    const handleOpenSignUpModal = () => {
        openModal(<SignUp/>);
    };

    const handleOpenLoginModal = () => {
        openModal(<Login/>);
    };
    return (
        <nav className={"fixed w-full top-0 left-0 z-50 bg-white"}>
            <ol className={"flex h-[60px] shadow-md items-center justify-between px-[361px]"}>
                <li >
                    <a className={"flex items-center gap-[4px] cursor-pointer"} href={"/"}>
                        <img className={'h-[32px]'} src={'/studycompass.png'} alt="" />
                    </a>

                </li>
                <ol className={"flex items-center gap-[10px]"}>
                    <li><a className={`w-[180px] flex justify-center items-center gap-[6px] ${location.pathname === '/' ?'text-[#4434E2] font-semibold':'text-[#646371]'}`} href={"/"}><StopWatchIcon color={location.pathname === '/' ?'#4434E2':'#646371'}/>스톱워치</a></li>
                    <li><a className={`w-[180px] flex justify-center items-center gap-[6px] ${location.pathname === '/memory-study' ?'text-[#4434E2] font-semibold':'text-[#646371]'}`} href={"/memory-study"}><BoardIcon color={location.pathname === '/memory-study' ?'#4434E2':'#646371'}/>공부 인증 게시판</a></li>
                    <li><a className={`w-[180px] flex justify-center items-center gap-[6px] ${location.pathname === '/how-to-study' ?'text-[#4434E2] font-semibold':'text-[#646371]'}`} href={"/how-to-study"}><CheckListIcon color={location.pathname === '/how-to-study' ?'#4434E2':'#646371'}/>공부방법</a></li>

                </ol>
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
        </nav>
    );
};

export default Header;