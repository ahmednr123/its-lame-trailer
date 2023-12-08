import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'

export const ThirdTextScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const funnyInterpolate = interpolate(frame, [0,4,19,23], [-400,200,200,1080], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const lameInterpolate = interpolate(frame, [20,24,39,43], [-600,200,200,1080], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const darkInterpolate = interpolate(frame, [40,44,59,64], [-600,200,200,1080], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const stupidInterpolate = interpolate(frame, [60,64,79,83], [-650,200,200,1080], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });
    const ansInterpolate = interpolate(frame, [79,83],[-427,-1080], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    })
    const transform = `translate(${ansInterpolate}px,-50%)`;

    return (
		<AbsoluteFill className="bg-[#000] p-[100px] items-center justify-center">
            <div style={{fontFamily, top: 'calc(50% - 250px)', right: `${funnyInterpolate}px`}} className='absolute text-red-600 text-[150px] font-extrabold'>
                FUNNY
            </div>
            <div style={{fontFamily, top: 'calc(50% - 250px)', right: `${lameInterpolate}px`}} className='absolute text-red-600 text-[150px] font-extrabold'>
                LAME
            </div>
            <div style={{fontFamily, top: 'calc(50% - 250px)', right: `${darkInterpolate}px`}} className='absolute text-red-600 text-[150px] font-extrabold'>
                DARK
            </div>
            <div style={{fontFamily, top: 'calc(50% - 250px)', right: `${stupidInterpolate}px`}} className='absolute text-red-600 text-[150px] font-extrabold'>
                STUPID
            </div>
            <div style={{fontFamily,transform, top:'50%',left:'50%'}} className='absolute leading-[1] text-[150px] font-extrabold w-max text-white'>
                ANSWERS
            </div>
		</AbsoluteFill>
	);
};
