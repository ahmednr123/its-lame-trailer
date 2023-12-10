import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

import EmojiImage from './emoji-image.svg';
import './style.css';

export const Emoji:
React.FC<{x: number, y: number, scale: number, flip: boolean}> =
({x, y, scale, flip}) => {

	return (
        <div
            style={{
                top: `${y}%`,
                left: `${x}%`,
                //fontSize: `${Math.ceil(300*scale)}px`,
                scale: `${scale}`,
                transform: 'translate(-50%,-50%)'
            }}
            className={`absolute rotate-anim-better ${flip && 'flipped'}`}
        >
            <img style={{width: '400px', height: '400px'}} src={EmojiImage}/>
        </div>
    );
};
