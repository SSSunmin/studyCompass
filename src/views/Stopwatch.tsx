import React, { useState, useEffect, useRef } from 'react';
import {Get, Post} from "@/axios.ts";

interface TimerInfo {
    "hour": number,
    "minute": number,
    "second": number,
    "isRunning": boolean
}

const Stopwatch: React.FC = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = window.setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    const startTimer = async () => {
        setIsRunning(true);
        await Post('/v1/study-timer')
    };

    const StopTimer = async() => {
        setIsRunning(false);
        setTime(0);
        await Post('/v1/study-timer')
    };

    const getStudyTime = async () => {
        try {
            const result = await Get<{ data: { data: { value: TimerInfo } } }>('/v1/study-timer');
            const data = result.data.data.value;

            if(data.isRunning){
                const initialTime = data.hour * 3600000
                    + data.minute * 60000
                    + data.second * 1000;

                setTime(initialTime);
            }

            setIsRunning(data.isRunning);

        } catch (err) {
            if (err instanceof Error) {
                alert("공부 시간 정보를 불러오지 못했습니다.");
            }
        }
    }
    useEffect(() => {
        getStudyTime();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-[#F8F9FB] text-white">
           <img className={"w-[230px] mb-[45px]"} src={'/stopwatch.png'} alt="Stopwatch" />
            <div className="flex gap-[10px] font-['Bungee'] text-6xl p-[10px]  text-[#4434E2]">
                <div >
                    <p className={'text-center text-[16px] text-[#9291A5]'}>hours</p>
                    <p>{String(hours).padStart(2, '0')}</p>
                </div>
                <div><p className={'text-[16px] text-transparent'}>d</p><p>:</p></div>
                <div >
                    <p className={'text-center text-[16px] text-[#9291A5]'}>Minutes</p>
                    <p>{String(minutes).padStart(2, '0')}</p>
                </div>
                <div><p className={'text-[16px] text-transparent'}>d</p><p>:</p></div>
                <div >
                    <p className={'text-center text-[16px] text-[#9291A5]'}>seconds</p>
                    <p>{String(seconds).padStart(2, '0')}</p>
                </div>
            </div>
            <div className="flex space-x-4 mt-8">
                {!isRunning ? <button
                    onClick={startTimer}
                    className={`w-[160px] h-[60px]  rounded-full font-semibold bg-[#4434E2] hover:bg-[#3025A0] transition duration-300`}
                >
                    시작
                </button>:<>
                    <button
                    onClick={StopTimer}
                    className="w-[160px] h-[60px] rounded-full font-semibold bg-gray-500 hover:bg-gray-600 transition duration-300"
                >
                    정지
                </button></>}
            </div>
        </div>
    );
};

export default Stopwatch;
