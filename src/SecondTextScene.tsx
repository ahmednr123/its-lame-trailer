import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'

function getWordIndex (frame: number, arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (frame <= arr[i]) {
            return i;
        }
    }
    return arr.length;
}

export const SecondTextScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const words = ['WHAT',' KIND',' OF',' QUESTIONS?'];
    const i = getWordIndex(frame, [19,29,34,49]);

//    const translateY = interpolate(frame, [70,75], [0,-1920], {
//        extrapolateLeft: 'clamp',
//        extrapolateRight: 'clamp'
//    });
//    const transform = `translateY(${translateY}px)`;

    return (
		<AbsoluteFill className="bg-[#fff] p-[100px] items-center justify-center">
            <div style={{fontFamily}} className='leading-[1] text-[150px] font-extrabold flex w-[972px] text-black'>
                {words.slice(0,i).map(str => <div>{str}</div>)}
            </div>
		</AbsoluteFill>
	);
};

