import { Audio, AbsoluteFill, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
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

    let background = '#071F21';
    if (frame <= 4 || frame > 72) {
        background = '#071F2100';
    }

    return (
		<AbsoluteFill style={{
            background
        }} className="p-[100px] items-center justify-center z-50">
            <div style={{rotate: `${rotate}deg`, transform: `translate(${slideX}px, ${slideY}px)`, opacity: `${opacity}`}}>
                <FirstVideo scale={scale}/>
            </div>
            <Audio src={staticFile('quick-woosh.wav')} />
            <Audio src={staticFile("gay.mp3")} startFrom={2} volume={
                f => interpolate(frame, [19,20], [0,1], {extrapolateLeft:"clamp"})
            } />
            <Sequence from={10}>
                <Audio src={staticFile("notification.mp3")} />
            </Sequence>
            <Sequence from={60}>
                <Audio src={staticFile('whoosh.mp3')} />
            </Sequence>
		</AbsoluteFill>
	);
};

