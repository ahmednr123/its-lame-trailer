import {AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
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

    const translateY = interpolate(frame, [0,80,81,85], [0,-200,-200,-2000], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const transform = `translateY(${translateY}px)`;

    return (
		<AbsoluteFill className="bg-[#071F21] p-[100px] items-center justify-center z-60">
            <div style={{fontFamily,transform}} className='leading-[1] text-[#F4F2F3] text-[150px] font-extrabold flex flex-col w-[972px]'>
                {words.slice(0,i).map(str => <div>{str}</div>)}
            </div>
            <Sequence from={20}>
                <Audio src={staticFile('jab.wav')} />
            </Sequence>
            <Sequence from={30}>
                <Audio src={staticFile('jab.wav')} />
            </Sequence>
            <Sequence from={35}>
                <Audio src={staticFile('jab.wav')} />
            </Sequence>
            <Sequence from={50}>
                <Audio src={staticFile('jab.wav')} />
            </Sequence>
            <Sequence from={60}>
                <Audio src={staticFile('jab.wav')} />
            </Sequence>
		</AbsoluteFill>
	);
};

