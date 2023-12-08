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

export const FirstTextScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const words = ['ANSWER','QUIRKY','QUESTIONS','WITH YOUR','FRIENDS'];
    const i = getWordIndex(frame, [19,29,34,49,59]);

    const translateY = interpolate(frame, [70,75], [0,-1920], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const transform = `translateY(${translateY}px)`;

    return (
		<AbsoluteFill className="bg-[#000] p-[100px] items-center justify-center">
            <div style={{fontFamily,transform}} className='leading-[1] text-white text-[150px] font-extrabold flex flex-col w-[972px]'>
                {words.slice(0,i).map(str => <div>{str}</div>)}
            </div>
		</AbsoluteFill>
	);
};

