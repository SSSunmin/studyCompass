import {ChangeEvent, useState} from 'react';
import LabelInput from "@/components/LabelInput.tsx";
import {Button} from "@/components/ui/button.tsx";

const EditProfileModal = () => {
    const [file, setFile] = useState("");

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = () => {
                if(typeof reader.result === 'string'){
                    setFile(reader.result);
                }
            };
        }
    }
    return <div className={'flex flex-col items-center justify-center gap-[16px]'}>
        <img src={file.length>0?file:"/profile.jpeg"} alt='profile'  className={"w-[140px] h-[140px] rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.2)] object-contain"}/>
        <label htmlFor={'profile'} className={'font-semibold cursor-pointer '}>
            편집
        </label>
        <input className={"hidden"} type={'file'} id={"profile"} onChange={handleFileChange}/>
        <LabelInput
            label="닉네임"
            id={"닉네임"}
            type="text"
            placeholder="닉네임를 입력해주세요"
        />
        <Button className={"w-full bg-[#4434E2] "} >수정</Button>
    </div>
}

export default EditProfileModal;