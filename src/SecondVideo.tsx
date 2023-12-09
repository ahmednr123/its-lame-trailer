import {AbsoluteFill, Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont as LoadLexend } from '@remotion/google-fonts/Lexend';
import { loadFont as LoadLondrina} from '@remotion/google-fonts/LondrinaSolid';
import React from 'react';

import './style.css';
import { Answer, AnswerType } from './Answer';

//👇🏾👆🏾

export const SecondVideo:
React.FC = () => {
    const lexendFontFamily = LoadLexend().fontFamily;
    const londrinaFontFamily = LoadLondrina().fontFamily;
	const frame = useCurrentFrame();

    const opacityBackdrop = interpolate(frame, [80, 98, 152, 170], [0,1,1,0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const inputRevealY = interpolate(frame, [80, 98, 152, 170], [500,0,0,500], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const height = interpolate(frame, [165, 185], [1500, 900], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const topMargin = interpolate(frame, [165, 185], [100, -320], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    });

    const revealWidth = interpolate(frame, [230,240,241,251], [0, 310, 310, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp'
    });

    let revealed = false;
    let revealClamp = 'left-[100px]'
    if (frame > 240) {
        revealClamp = 'right-[100px]';
        revealed = true;
    }

    const loader = Math.round(interpolate(frame, [80,180], [100,50]));

    const isSelected = frame > 134;

	return (
        <div
            style={{
                fontFamily: lexendFontFamily,
                scale: `0.9`,
                overflow: 'hidden',
                height: `${height}px`
            }}
            className="flex flex-col items-center rounded-3xl w-[972px] scene-container bg-[#5DB09E]"
        >
            <div style={{marginTop: `${topMargin}px`}} className="text-white text-[60px] font-bold leading-tight text-center w-[70%] mb-[80px]">
                If given a day as Prime Minister, what actions would you take?
            </div>
            <div className='w-[80%]'>
                <div
                    style={{
                        fontFamily: londrinaFontFamily,
                        animationDirection: 'normal',
                        animationDelay: '1s',
                        boxShadow: '12px 12px 0px rgba(0,0,0,0.2)',
                        border: '4px solid black'
                    }}
                    className="p-[50px] pb-[35px] text-[90px] leading-tight w-[620px] text-center bg-[#F4F2F3] rounded-2xl"
                >
                    Demonitize again!
                    <div style={{fontFamily:lexendFontFamily}} className={`relative font-light text-[25px] ${revealed ? 'text-black' : 'text-gray-400'} mt-[20px]`}>
                        { !revealed ? '?????' : 'Narendra Modi' }
                        <div style={{width: `${revealWidth}px`}} className={`absolute h-[40px] bg-black top-0 rounded-full ${revealClamp}`}></div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] flex flex-row-reverse mt-[50px]'>
                <div
                    style={{
                        fontFamily: londrinaFontFamily,
                        animationDirection: 'reverse',
                        animationDelay: '2s',
                        boxShadow: '12px 12px 0px rgba(0,0,0,0.2)',
                        border: '4px solid black'
                    }}
                    className="p-[50px] pt-[35px] text-[90px] leading-tight w-[620px] text-center bg-[#F4F2F3] rounded-2xl"
                >
                    <div style={{fontFamily:lexendFontFamily}} className={`relative font-light text-[25px] ${revealed ? 'text-black' : 'text-gray-400'} mb-[20px]`}>
                        { !revealed ? '?????' : 'Rahul Gandhi' }
                        <div style={{width: `${revealWidth}px`}} className={`absolute h-[40px] bg-black top-0 rounded-full ${revealClamp}`}></div>
                    </div>
                    Make potatoes into gold
                </div>
            </div>
            <div
                style={{
                    opacity: opacityBackdrop,
                    backdropFilter: 'blur(4px)',
                    background: 'rgba(0,0,0,0.2)'
                }}
                className='absolute top-0 left-0 w-full h-full'
            ></div>
            <div
                style={{
                    transform: `translateY(${inputRevealY}px)`
                }}
                className='absolute w-[calc(100%-60px)] py-[30px] pt-[70px] px-[50px] rounded-3xl bg-black bottom-[30px] left-[30px]'
            >
                <div style={{width:`${loader}%`}} className={`absolute rounded-tl-3xl h-[30px] bg-green-600 top-[-2px] left-[-2px]`}></div>
                <div style={{transform: `translateX(70px)`}} className="w-[80%] text-white text-[28px] text-center">If given a day as Prime Minister, what actions would you take?</div>
                <div style={{margin: '30px 0 30px 0px'}}>
                    <div className={`p-[25px] text-[40px] font-bold flex justify-between items-center border-black ${isSelected ? 'border-white text-black bg-white rounded-2xl' : 'border-black text-white'}`}>
                        <span>"Demonitize again!"</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path fill='#fff' d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg></span>
                        {
                            isSelected && <span><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg></span>
                        }
                    </div>
                    <div className={`p-[25px] text-[40px] font-bold flex justify-between items-center border-black text-white`}>
                        <span>"Make potatoes into gold"</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path fill='#fff' d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
