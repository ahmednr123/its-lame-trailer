import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'
import { FirstVideo } from './FirstVideo';

function getWordIndex (frame: number, arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (frame <= arr[i]) {
            return i;
        }
    }
    return arr.length;
}

export const FirstVideoScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    return (
		<AbsoluteFill className="bg-[#000] p-[100px] items-center justify-center">
            <FirstVideo/>
		</AbsoluteFill>
	);
};

