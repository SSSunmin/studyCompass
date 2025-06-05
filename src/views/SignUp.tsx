import LabelInput from "@/components/LabelInput.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FormEvent, useState} from "react";
import {useModal} from "@/hooks/useModal.ts";
import {Post} from "@/axios.ts";


const SignUp = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {closeModal} = useModal()

    const submitSigupForm = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await Post('/v1/auth/signup',{
                "loginId":id,
                "pwd": password,
                "confirmPwd": confirmPassword,
                "userNick":nickName,
                "userNm": name
            });
            closeModal();
        }catch (err){
            if(err instanceof Error){
                alert('서버 문제로 가입이 되지 않았습니다.')
            }
        }

    }



    return (
        <section className={"flex flex-col items-center"}>
            <h3>회원가입</h3>
            <form className={"flex flex-col items-start gap-[12px]"} onSubmit={submitSigupForm}>
                <LabelInput
                    label="이름"
                    id={"이름"}
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <LabelInput
                    label="닉네임"
                    id={"닉네임"}
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                /><LabelInput
                    label="아이디"
                    id={"아이디"}
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <LabelInput
                    label="비밀번호"
                    id={"비밀번호"}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LabelInput
                    label="비밀번호 확인"
                    id={"비밀번호 확인"}
                    type="password"
                    placeholder="다시 한번 비밀번호를 입력해주세요"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button className={"w-full bg-[#4434E2]"} type={'submit'} >가입</Button>
            </form>
        </section>

    );
};

export default SignUp;