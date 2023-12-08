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

    const words = ['WHAT',' KIND',' OF',' ANSWERS?'];
    const i = getWordIndex(frame, [0,15,20,30]);
    const variations = [-300,-300,-300,-300,-430]

//    const translateX = interpolate(frame, [0,30], [-300,-400], {
//        extrapolateLeft: 'clamp',
//        extrapolateRight: 'clamp'
//    });
    const transform = `translate(${(frame*-0.7)+(i*variations[i])}px,-50%)`;

    return (
		<AbsoluteFill className="bg-[#fff] p-[100px] items-center justify-center">
            <div style={{fontFamily,transform, top:'50%',left:'50%'}} className='absolute leading-[1] text-[150px] font-extrabold w-max text-black'>
                {
                    words
                        .slice(0,i)
                        .map(str => <span className='mx-[8px]'>{str}</span>)
                }
            </div>
		</AbsoluteFill>
	);
};
//.filter((_,index)=> index==i || (i >= 3 && index==3))
