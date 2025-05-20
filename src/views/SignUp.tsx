import LabelInput from "@/components/LabelInput.tsx";
import {Button} from "@/components/ui/button.tsx";


const SignUp = () => {
    return (
        <section className={"flex flex-col items-center"}>
            <h3>회원가입</h3>
            <form className={"flex flex-col items-start gap-[12px]"}>

                <LabelInput
                    label="이메일"
                    id={"이메일"}
                    type="email"
                    placeholder="이메일을 입력해주세요"
                />
                <LabelInput
                    label="닉네임"
                    id={"닉네임"}
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                /><LabelInput
                    label="아이디"
                    id={"아이디"}
                    type="text"
                    placeholder="아이디를 입력해주세요"
                />
                <LabelInput
                    label="비밀번호"
                    id={"비밀번호"}
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                />
                <LabelInput
                    label="비밀번호 확인"
                    id={"비밀번호 확인"}
                    type="password"
                    placeholder="다시 한번 비밀번호를 입력해주세요"
                />
                <Button className={"w-full bg-[#4434E2]"} >가입</Button>
            </form>
        </section>

    );
};

export default SignUp;