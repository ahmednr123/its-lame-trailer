import {AbsoluteFill, Audio, Easing, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import { ActionVideo } from './ActionVideo';

function animRotateFunc (frame: number, fps: number, seconds: number) {
    const totalFrames = seconds * fps;
    const currentFrame = frame%totalFrames;
    const perc = currentFrame/totalFrames;
    const rotate = Math.round(perc*360);
    return `rotate(${rotate}deg)`;
}

export const ActionScene: React.FC = () => {
    const frame = useCurrentFrame();

    const videoOpacity = interpolate(frame, [10,30],[0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const recordY = interpolate(frame, [30,80],[700,500], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic)
    });

    const recordRotate = animRotateFunc(frame, 30, 20);

    return (
		<AbsoluteFill className="bg-[#F4F2F3] items-center justify-center">
            <div style={{
                scale: '1',
                height: '1000px',
                width: '900px',
                zIndex: '10',
                opacity: `${videoOpacity}`
            }}>
                <ActionVideo/>
            </div>
            <div className='bg-[#F4F2F3] absolute w-[1080px] h-[460px] bottom-0 z-20'></div>
            <div style={{overflow:'hidden'}} className='bg-[#F4F2F3] absolute w-[1080px] h-[550px] top-0 z-20 items-center justify-center flex'>
                <div style={{opacity: `${videoOpacity}`, transform: `translateY(${recordY}px) ${recordRotate}`}} className='bg-[#071F21] absolute w-[760px] h-[760px] rounded-full'>
                    <svg viewBox="0 0 400 400">
                        <g id="record">
                        <circle r="200" cx="201" cy="201" fill='#071F21'/>
                        <circle r="180" cx="201" cy="201" stroke="#676767" stroke-dasharray="40 10 20 30" fill='#071F21' />
                        <circle r="160" cx="201" cy="201" stroke="#676767" stroke-dasharray="10 40 30 20" fill='#071F21' />
                        <circle r="140" cx="201" cy="201" stroke="#676767" stroke-dasharray="20 30 40 10" fill='#071F21' />
                        <circle id="label" cx="200" cy="200" r="65" />
                        <text y="180" x="165">The Clash </text>  
                        <text y="230" x="150">London Calling </text>    
                        <circle id="dot" cx="200" cy="200" r="6" />
                        </g>
                    </svg>
                </div>
            </div>
            <div style={{opacity: `${videoOpacity}`, border: '4px solid #071F21', transform: `translateY(45px)`}} className='absolute w-[905px] h-[910px] z-[25]'></div>
            <Sequence from={0}>
                <Audio src={staticFile('cheers.wav')} />
            </Sequence>
        </AbsoluteFill>
	);
};

