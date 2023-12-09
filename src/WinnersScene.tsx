import {AbsoluteFill, Easing, interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'

export const WinnersScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const winnersY = interpolate(frame, [10,20], [1000, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    return (
		<AbsoluteFill className="bg-black items-center justify-center">
            <div style={{fontFamily}} className='text-[150px] leading-[1.1] text-white font-extrabold w-[90%]'>
                <div>WINNERS </div>
                <div>WILL GET</div>
                <div>REWARDED!</div>
            </div>
        </AbsoluteFill>
	);
};

