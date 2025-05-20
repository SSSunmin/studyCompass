import StudyPost from "@/views/how-to-study/StudyPost.tsx";
import {useNavigate} from "react-router-dom";
import Card from "@/components/Card.tsx";

interface StudyPost {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    date: string;
}

const samplePosts: StudyPost[] = [
    {
        id: 1,
        title: 'React 공부 이렇게만 하면 된다!',
        content: '오늘은 React 컴포넌트 구조와 Props 사용법에 대해 깊이 있게 공부했습니다. 상태 관리와 라이프사이클에 대한 이해를 높이는 데 집중했으며, 여러 실습 예제를 통해 개념을 확실히 다졌습니다.',
        imageUrl: 'https://media.istockphoto.com/id/104355461/ko/%EC%82%AC%EC%A7%84/%EC%A0%84%EB%A9%B4-%EC%98%81%EA%B5%AD-%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4%EA%B3%A0%EC%96%91%EC%9D%B4-7-%EA%B0%9C%EC%9B%94-%ED%9C%B4%EC%8B%9D.jpg?s=612x612&w=0&k=20&c=4OsJ6wig6RNW7TKkLUvyrYKgz1fFRKSWuN0oDgpQ2R0=',
        date: '2024-03-15'
    },
    {
        id: 2,
        title: 'Typescript 어렵지 않아요',
        content: 'Typescript의 고급 타입 사용법과 제네릭 활용 방법을 공부했습니다. 인터페이스와 타입 별칭의 차이점을 이해하고 실제 프로젝트에 적용해보는 시간을 가졌습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDMWKyL4Kg84gHdCWAnn_0Ttwm_RjwJ6v2w&s',
        date: '2024-03-14'
    },
    {
        id: 3,
        title: 'Typescript 어렵지 않아요',
        content: 'Typescript의 고급 타입 사용법과 제네릭 활용 방법을 공부했습니다. 인터페이스와 타입 별칭의 차이점을 이해하고 실제 프로젝트에 적용해보는 시간을 가졌습니다.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDMWKyL4Kg84gHdCWAnn_0Ttwm_RjwJ6v2w&s',
        date: '2024-03-14'
    },
    // 추가 샘플 데이터...
];

const HowToStudy = () => {
    const navigate = useNavigate();
    return (
        <div className=" ml-auto mr-auto mt-[76px] px-[361px]">
            <div className={'w-full mb-[16px]'}>
                <button
                    onClick={() => navigate('/how-to-study/create')}
                    className="flex gap-[10px] bg-[#646371] text-white p-[10px] cursor-pointer  rounded-[12px] ml-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M14.2999 19.5516H20.2999M4.69995 19.5516L9.06594 18.6718C9.29771 18.6251 9.51053 18.511 9.67767 18.3438L19.4513 8.56474C19.9199 8.09588 19.9196 7.33589 19.4506 6.86743L17.3802 4.79936C16.9114 4.33109 16.1518 4.33141 15.6834 4.80007L5.90871 14.5801C5.7419 14.747 5.628 14.9594 5.58125 15.1907L4.69995 19.5516Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    글쓰기
                </button>
            </div>

            <div className="w-full grid grid-cols-3 justify-evenly">
                {samplePosts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default HowToStudy;