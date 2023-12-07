import {Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/LondrinaSolid';
import React from 'react';

export enum AnswerType {
    FIRST, SECOND
}

export const Answer:
React.FC<{answer: string, type: AnswerType}> = ({answer, type}) => {
    const { fontFamily } = loadFont();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [40, 50], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

    const transform = type == AnswerType.FIRST ?
        `translate(-100px, -200px)` :
        `translate(100px, 200px)`;

	return (
        <div
            style={{opacity, fontFamily, transform, boxShadow: '12px 12px 0px rgba(0,0,0,0.2)', border: '4px solid black'}}
            className="absolute p-[50px] text-[90px] leading-tight w-[620px] text-center bg-[#F4F2F3] rounded-2xl"
        >
            {answer}
        </div>
    );
};
