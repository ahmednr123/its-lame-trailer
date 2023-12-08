import {AbsoluteFill} from 'remotion';
import {useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/LondrinaSolid';
import React from 'react';

import './style.css';

export enum AnswerType {
    FIRST, SECOND
}

export const FirstVideo:
React.FC = () => {
    const { fontFamily } = loadFont();
	const frame = useCurrentFrame();

	return (
        <div style={{fontFamily}} className="w-[450px] h-[800px] scene-container bg-[#5DB09E]">
            <div id="wait-instruction"><span id="answer-text">Answer questions on your devices</span> <div id="timer">60</div></div>
        </div>
    );
};
