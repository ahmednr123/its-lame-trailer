import {AbsoluteFill, Audio, interpolate, staticFile, useCurrentFrame} from 'remotion';
import { Emoji } from './Emoji';

const arr = [
    {
        top: 30,
        left: 30,
        scale: 2,
    },
    {
        top: 55,
        left: 65,
        scale: 2,
    },
    {
        top: 25,
        left: 75,
        scale: 2,
    },
    {
        top: 60,
        left: 30,
        scale: 2,
    },

    {
        top: 80,
        left: 20,
        scale: 3,
    },
    {
        top: 10,
        left: 55,
        scale: 3,
    },
    {
        top: 80,
        left: 80,
        scale: 3,
    },

    {
        top: 20,
        left: 20,
        scale: 3,
    },
    {
        top: 90,
        left: 50,
        scale: 3,
    },
    {
        top: 15,
        left: 90,
        scale: 3,
    },

    {
        top: 50,
        left: 50,
        scale: 4,
    },
];
export const EmojiComposition: React.FC = () => {
    const frame = useCurrentFrame();//Math.round(useCurrentFrame() * 0.333);
    const emojisPerFrame = arr.length/30;
    const emojis = emojisPerFrame * frame;
    const formatterArr = frame < 30 ?
        arr.slice(0,emojis) :
        arr.slice(emojis-arr.length, arr.length);

 	return (
		<AbsoluteFill>
            {formatterArr.map((e, i) => <Emoji x={e.left} y={e.top} scale={e.scale} flip={i%2==0}/>)}
            <Audio src={staticFile("teen-laugh.wav")} volume={
                f => interpolate(f, [45,59], [1,0], {extrapolateLeft:'clamp'})
            }/>
		</AbsoluteFill>
	);
};

