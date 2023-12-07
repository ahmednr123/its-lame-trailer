import {Easing, interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'
import React from 'react';

export const Question:
React.FC<{question: string}> = ({question}) => {
    const { fontFamily } = loadFont();
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
    const scale = interpolate(frame, [20, 40], [1.5, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
        easing: Easing.exp
	});
    const translateY = interpolate(frame, [20, 40], [0, -700], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
        easing: Easing.exp
	});

    const transform = `translateY(${translateY}px) scale(${scale})`;

	return (
        <div style={{opacity, fontFamily, transform}} className="text-white text-[60px] font-bold leading-tight text-center w-[60%]">
            {question}
        </div>
    );
};