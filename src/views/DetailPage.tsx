import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const { id } = useParams(); // id는 문자열로 들어옵니다.
    return (
        <div>
            <div className={'relative w-full h-[230px]'}>
                <img src={"/image.jpg"} alt={"dummy"} className={'w-full h-full object-cover'}/>
                <div className={'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 text-white'}>
                    <p className={'text-[36px] font-bold text-center mb-[15px]'}>합정동 최고의 스터디 카페!</p>
                    <p className={'text-[15px] font-medium text-center'}>2025.05.20</p>
                </div>

            </div>
            <div>{id}</div>
            <div className={'w-[800px] ml-auto mr-auto px-[36px] pt-[16px] text-[16px] text-[#3F3F49] font-medium break-keep'}>
                어쩌구 저쩌구 저저구 저쩌구
                어쩌구 저쩌구 저저구 저쩌구<br/><br/>

                어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구<br/><br/>

                어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구
                어쩌구 저쩌구 저저구 저쩌구<br/><br/>

                어쩌구 저쩌구 저저구 저쩌구<br/><br/>


                어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구
                어쩌구 저쩌구 저저구 저쩌구어쩌구 저쩌구 저저구 저쩌구<br/>
            </div>


        </div>
    );
};

export default DetailPage;
