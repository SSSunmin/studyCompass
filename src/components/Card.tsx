import React, {useState} from 'react';
import {StudyPostData} from "@/views/MemoryStudy.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {HowToStudyData} from "@/views/HowToStudy.tsx";

const Card: React.FC<{ post?: StudyPostData ,howto?: HowToStudyData}> = ({ post ,howto}) => {
    const [showInfo, setShowInfo] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();

    const showDetail =()=>{
        const path = location.pathname.split("/")[1]
        if(post){
            navigate(`/detail/${post.boardSid}?page=${path}`);
        }else if(howto){
            navigate(`/detail/${howto.knowHowSid}?page=${path}`);
        }

    }

    return (
        <div onClick={showDetail} onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} className="w-[380px] h-[380px] relative  cursor-pointer flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {post?<> <img
                src={'http://ec2-3-39-191-102.ap-northeast-2.compute.amazonaws.com:8080'+post.fileList[0].srcPath}
                alt={post.title}
                className="w-full h-full object-cover aspect-square"
            />
                {showInfo && <div className={'absolute top-0 left-0 z-50 w-full h-full bg-black/50 backdrop-opacity-10'}><div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white text-lg font-semibold truncate flex-1 mr-2">
                            {post.title}
                        </h3>
                        <span className="text-sm text-white">{post.regDt.split('T')[0]}</span>
                    </div>
                    <p className="text-white line-clamp-3 flex-1">
                        {post.content}
                    </p>
                </div></div>}</>:
                <><img
                src={'http://ec2-3-39-191-102.ap-northeast-2.compute.amazonaws.com:8080'+howto?.fileList[0].srcPath}
                alt={howto?.title}
                className="w-full h-full object-cover aspect-square"
            />
                {showInfo && <div className={'absolute top-0 left-0 z-50 w-full h-full bg-black/50 backdrop-opacity-10'}><div className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white text-lg font-semibold truncate flex-1 mr-2">
                            {howto?.title}
                        </h3>
                        <span className="text-sm text-white">{howto?.regDt.split('T')[0]}</span>
                    </div>
                    <p className="text-white line-clamp-3 flex-1">
                        {howto?.content}
                    </p>
                </div></div>}</>}

        </div>
    );
};

export default Card;
