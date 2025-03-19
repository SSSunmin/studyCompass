import LabelInput from "@/components/LabelInput.tsx";
import {Button} from "@/components/ui/button.tsx";

const Login = () => {
    return (
        <section className={"flex flex-col items-center"}>
            <h3>로그인</h3>
            <form className={"flex flex-col items-start gap-[12px]"}>

                <LabelInput
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
                <Button className={"ml-auto"} >로그인</Button>
            </form>
        </section>

    );
};

export default Login;