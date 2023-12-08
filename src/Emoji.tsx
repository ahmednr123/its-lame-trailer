import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

import './style.css';

export enum AnswerType {
    FIRST, SECOND
}

const arr = [0.1,0.3];
export const Emoji:
React.FC<{x: number, y: number, scale: number}> =
({x, y, scale}) => {

	return (
        <div
            style={{
                top: `${y}%`,
                left: `${x}%`,
                fontSize: `${Math.ceil(300*scale)}px`,
                transform: 'translate(-50%,-50%)',
                //animationDelay: arr[Math.floor(Math.random() * arr.length)]+'s'
            }}
            className='absolute rotate-anim'
        >🤣</div>
    );
};
