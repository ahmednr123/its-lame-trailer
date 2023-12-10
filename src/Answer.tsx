import {Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/LondrinaSolid';
import React from 'react';

import './style.css';

const animArr = [
    [1.32, -1.50],
    [-0.26, -1.98],
    [-1.66, -1.12],
    [-1.93, 0.51],
    [-0.90, 1.79],
    [0.75, 1.85],
    [1.89, 0.66],
    [1.74, -0.98],
    [0.41, -1.96],
    [-1.20, -1.60],
    [-1.99, -0.16],
    [-1.44, 1.39],
    [0.10, 2.00],
    [1.56, 1.25],
    [1.97, -0.35],
    [1.04, -1.71],
    [-0.60, -1.91],
    [-1.83, -0.81],
    [-1.81, 0.84],
    [-0.57, 1.92],
    [1.32, -1.50]
];

function animFunc (frame: number, fps: number, arr: any[], seconds: number, {reverse,offset}: {reverse?:boolean, offset?:number}) {
    const totalFrames = seconds * fps;
    const currentFrame = (frame+(offset?offset:0))%totalFrames;
    const perc = currentFrame/totalFrames;
    const index = Math.round(perc*(arr.length-1));
    const translate = arr[reverse ? (arr.length-1)-index : index];
    return `translate(${translate[0]*1.4}px,${translate[1]*1.4}px)`;
}

export enum AnswerType {
    FIRST, SECOND
}

export const Answer:
React.FC<{answer: string, type: AnswerType, startFrame: number, endFrame: number}> =
({answer, type, startFrame, endFrame}) => {
    const { fontFamily } = loadFont();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [startFrame, endFrame], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

    const divAnim = animFunc(frame, 30, animArr, 4, 
        type == AnswerType.FIRST ? {} : {reverse: true, offset: 5}
    );
    const transform = type == AnswerType.FIRST ?
        `translate(-100px, -200px)` :
        `translate(100px, 230px)`;

	return (
        <div style={{transform}} className="absolute">
            <div
                style={{
                    opacity,
                    fontFamily,
                    transform: divAnim,
                    animationDirection: type == AnswerType.FIRST ? 'normal' : 'reverse',
                    animationDelay: type == AnswerType.FIRST ? '1s' : '2s',
                    boxShadow: '12px 12px 0px rgba(0,0,0,0.2)',
                    border: '4px solid #071F21'
                }}
                className="p-[50px] text-[#071F21] text-[90px] leading-tight w-[620px] text-center bg-[#F4F2F3] rounded-2xl"
            >
                {answer}
            </div>
        </div>
    );
};
