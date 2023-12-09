import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'
import { FirstVideo } from './FirstVideo';

export const FirstVideoScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const scale = interpolate(frame, [53,77], [0.8, 4], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.cubic
    })

    const rotate = interpolate(frame, [53,77], [0,-70], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.cubic
    });

    const slideY = interpolate(frame, [53,77], [0,-2400], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.cubic
    });

    const slideX = interpolate(frame, [53,77], [0,400], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.cubic
    });

    const opacity = interpolate(frame, [73,80], [1,0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    let background = '#000';
    if (frame <= 4 || frame > 72) {
        background = '#00000000';
    }

    return (
		<AbsoluteFill style={{
            background
        }} className="p-[100px] items-center justify-center">
            <div style={{rotate: `${rotate}deg`, transform: `translate(${slideX}px, ${slideY}px)`, opacity: `${opacity}`}}>
                <FirstVideo scale={scale}/>
            </div>
		</AbsoluteFill>
	);
};

