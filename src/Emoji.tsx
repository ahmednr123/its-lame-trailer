import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

import './style.css';

export const Emoji:
React.FC<{x: number, y: number, scale: number, flip: boolean}> =
({x, y, scale, flip}) => {

	return (
        <div
            style={{
                top: `${y}%`,
                left: `${x}%`,
                fontSize: `${Math.ceil(300*scale)}px`,
                transform: 'translate(-50%,-50%)'
            }}
            className={`absolute rotate-anim-better ${flip && 'flipped'}`}
        >🤣</div>
    );
};
