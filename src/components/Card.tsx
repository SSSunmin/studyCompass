import React, {useState} from 'react';
import {StudyPost} from "@/views/MemoryStudy.tsx";

const Card: React.FC<{ post: StudyPost }> = ({ post }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} className="w-[380px] h-[380px] relative  cursor-pointer flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover aspect-square"
            />
            {showInfo && <div className={'absolute top-0 left-0 z-50 w-full h-full bg-black/50 backdrop-opacity-10'}><div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-semibold truncate flex-1 mr-2">
                        {post.title}
                    </h3>
                    <span className="text-sm text-white">{post.date}</span>
                </div>
                <p className="text-white line-clamp-3 flex-1">
                    {post.content}
                </p>
            </div></div>}
        </div>
    );
};

export default Card;
