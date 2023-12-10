import {AbsoluteFill, Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend';
import React from 'react';

import './style.css';

export const FirstVideo:
React.FC<{scale: number}> = ({scale}) => {
    const { fontFamily } = loadFont();
	const frame = useCurrentFrame();

    const translateY = interpolate(frame, [2, 10, 11, 90], [2100, 200, 200, -100], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp'
    });

    const opacityBackdrop = interpolate(frame, [0, 18], [0,1], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const inputRevealY = interpolate(frame, [0, 18], [500,0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const loader = Math.round(interpolate(frame, [0,80], [100,50]));

    let inputValue = 'Answer';
    if (frame > 55) {
        const text = 'GAAAAAAYYYYYYYYYYY!!!';
        inputValue = text.slice(0, Math.min(text.length, Math.max((frame-65)/2, 1)))
    }

	return (
        <div
            style={{
                fontFamily,
                transform: `translateY(${translateY}px)`,
                scale: `${scale}`,
                overflow: 'hidden'
            }}
            className="rounded-3xl w-[972px] h-[1728px] scene-container bg-[#5DB09E]"
        >
            <div id="wait-instruction" style={{fontSize: '35px'}}>
                <span id="answer-text">Answer questions on your devices</span>
                <div id="timer">60</div>
            </div>
            <div
                style={{
                    opacity: `${opacityBackdrop}`,
                    backdropFilter: 'blur(4px)',
                    background: 'rgba(0,0,0,0.2)'
                }}
                className='absolute top-0 left-0 w-full h-full'
            ></div>
            <div
                style={{
                    transform: `translateY(${inputRevealY}px)`
                }}
                className='absolute w-[calc(100%-60px)] py-[70px] pt-[100px] px-[70px] rounded-3xl bg-black bottom-[30px] left-[30px]'
            >
                <div style={{width:`${loader}%`}} className={`absolute rounded-tl-3xl h-[40px] bg-green-600 top-[-2px] left-[-2px]`}></div>
                <div className='text-white text-[50px] font-bold'>Describe an LGBTQ+ event in one word.</div>
                <div className={`relative px-[30px] py-[20px] bg-white mt-[50px] text-[40px] font-light ${inputValue == 'Answer'? 'text-gray-400' : 'text-black'} rounded-xl`}>
                    {inputValue}
                    <div className='absolute top-[25px] right-[30px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                            <path fill="black" d="m16 464l480-208L16 48v160l320 48l-320 48Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
