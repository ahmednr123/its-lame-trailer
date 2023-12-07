import React from 'react';

import './style.css';

export enum AnswerType {
    FIRST, SECOND
}

export const Emoji:
React.FC<{}> =
() => {
	return (
        <div className='text-[100px] absolute'>🤣</div>
    );
};
