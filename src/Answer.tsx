import {Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/LondrinaSolid';
import React from 'react';

import './style.css';

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

    const transform = type == AnswerType.FIRST ?
        `translate(-100px, -200px)` :
        `translate(100px, 230px)`;

	return (
        <div style={{transform}} className="absolute">
            <div
                style={{
                    opacity,
                    fontFamily,
                    animationDirection: type == AnswerType.FIRST ? 'normal' : 'reverse',
                    animationDelay: type == AnswerType.FIRST ? '1s' : '2s',
                    boxShadow: '12px 12px 0px rgba(0,0,0,0.2)',
                    border: '4px solid black'
                }}
                className="p-[50px] text-[90px] leading-tight w-[620px] text-center bg-[#F4F2F3] rounded-2xl text-box"
            >
                {answer}
            </div>
        </div>
    );
};
