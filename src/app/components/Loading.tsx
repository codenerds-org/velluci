import Lottie from 'react-lottie';
import animationData from '../../../public/lottie/loading.json';
import { useEffect, useState } from 'react';

const LoadingPage = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots === '...') {
                    return '';
                } else {
                    return prevDots + '.';
                }
            });
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <Lottie
                options={defaultOptions}
                height={250}
                width={250}
                style={{ userSelect: 'none', display: 'flex', zIndex: 100, marginTop: '82px' }}
            />
            <h2 className="text-4xl font-light mt-16">
                Loading
                {dots}
            </h2>
        </div>
    )
}

export default LoadingPage;