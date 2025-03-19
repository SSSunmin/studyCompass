import React, { useState, useEffect, useRef } from 'react';

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
    const milliseconds = Math.floor((time % 1000) / 10);

    const startAndPause = (): void => {
        setIsRunning(!isRunning);
    };

    const reset = (): void => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-[10px]">오늘의 공부 시간</h1>
            <div className="text-6xl font-mono bg-gray-800 py-6 px-12 rounded-lg shadow-lg">
                {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}:
                {String(milliseconds).padStart(2, '0')}
            </div>
            <div className="flex space-x-4 mt-8">
                <button
                    onClick={startAndPause}
                    className={`px-6 py-3 rounded-lg font-semibold ${
                        isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    } transition duration-300`}
                >
                    {isRunning ? '일시정지' : '시작'}
                </button>
                <button
                    onClick={reset}
                    className="px-6 py-3 rounded-lg font-semibold bg-gray-500 hover:bg-gray-600 transition duration-300"
                >
                    정지
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
