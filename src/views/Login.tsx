import LabelInput from "@/components/LabelInput.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FormEvent, useState} from "react";
import {Post} from "@/axios.ts";
import {useModal} from "@/hooks/useModal.ts";

const Login = () => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {closeModal}=useModal()

    const onClickLogin =async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{
            const res = await Post<{data:{data:{value:{accessToken:string, refreshToken:string}}}},{
                "loginId":string,
                "pwd": string,
            }>('/v1/auth/login',{
                "loginId":id,
                "pwd": password,
            });
            const data = res.data.data.value
            window.localStorage.setItem('accessToken', data.accessToken);
            window.localStorage.setItem('refreshToken', data.refreshToken);
            closeModal()
        }catch (err){
            if(err instanceof Error){
                alert('아이디 또는 비밀번호가 다릅니다.')
            }
        }
    }

    return (
        <section className={"flex flex-col items-center"}>
            <h3>로그인</h3>
            <form className={"flex flex-col items-start gap-[12px]"} onSubmit={onClickLogin}>
                <LabelInput
                    label="아이디"
                    id={"아이디"}
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                />
                <LabelInput
                    label="비밀번호"
                    id={"비밀번호"}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Button className={"w-full bg-[#4434E2]"} type={"submit"} >로그인</Button>
            </form>
        </section>

    );
};

export default Login;