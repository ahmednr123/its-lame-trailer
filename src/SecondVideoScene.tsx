import {AbsoluteFill, Easing, interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend'
import { SecondVideo } from './SecondVideo';

const revealAfter = (frame: number, v: number, f?: number) => {
    if (f && frame > f) {
        return '0';
    }
    if (frame > v) {
        return '1';
    }
    return '0';
}//frame > v && (f && frame < f) ? '1' : '0';

export const SecondVideoScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const opacity = interpolate(frame, [66,70],[0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const moveHandX = interpolate(frame, [110, 130, 148, 168], [200,0,0,200], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic)
    })

    const moveHandY = interpolate(frame, [110, 130, 148, 168], [520,0,0,520], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic)
    })

    const handScale = interpolate(frame, [130,134,135,140], [1,0.85,0.85,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const firstTextPosition = interpolate(frame, [165, 185], [0,-800], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.sin
    });

    const videoPosition = interpolate(frame, [165, 185, 233, 243], [0,-640, -640, -200], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: frame < 233 ? Easing.sin : Easing.in(Easing.sin)
    });

    const fullSweep = interpolate(frame, [304, 314], [0,-100], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.sin
    });

    const background = interpolateColors(frame, [0,6], ["rgb(0,0,0)","rgb(255,255,255)"]);

    return (
		<AbsoluteFill style={{
            background,
            transform: `translateX(${fullSweep}%)`
        }} className="p-[100px] items-center justify-center">
            <div style={{fontFamily, transform: `translateY(${firstTextPosition}px)`}} className='text-[100px] w-[98%] font-extrabold leading-[1.1] mt-[50px]'>
                <div><span style={{opacity:revealAfter(frame,20)}}>VOTE</span><span style={{opacity:revealAfter(frame,30)}} className='ml-[40px]'>FOR</span></div>
                <div><span style={{opacity:revealAfter(frame,35)}}>THE</span><span style={{opacity:revealAfter(frame,40)}} className='ml-[40px]'>FUNNIEST</span></div>
                <div><span style={{opacity:revealAfter(frame,50)}}>ANSWER</span></div>
            </div>
            <div style={{fontFamily, transform: 'translateY(-520px)', opacity:revealAfter(frame,270)}} className='absolute text-[150px] font-extrabold'>TYPICAL</div>
            <div style={{opacity: `${opacity}`, transform: `translateY(${videoPosition}px)`}} className='opacity-0'>
                <SecondVideo />
            </div>
            <div style={{fontFamily, transform: 'translateY(500px)', opacity:revealAfter(frame,280)}} className='absolute text-[150px] font-extrabold'>MODI JI!</div>
            <div style={{fontFamily}} className='absolute text-[150px] w-[98%] font-extrabold leading-[1.1] mt-[900px] left-[170px]'>
                <div><span style={{opacity:revealAfter(frame,185,220)}}>WHO</span></div>
                <div><span style={{opacity:revealAfter(frame,190,225)}} className='ml-[100px]'>COULD</span></div>
                <div><span style={{opacity:revealAfter(frame,198,230)}} className='ml-[300px]'>IT</span></div>
                <div><span style={{opacity:revealAfter(frame,210,235)}} className='ml-[450px]'>BE?</span></div>
            </div>
            <div style={{rotate: '-30deg', transform: `translate(${moveHandX}px,${moveHandY}px)`, scale: `${handScale}`}} className='absolute text-[240px] bottom-[70px] left-[600px]'>👆🏾</div>
		</AbsoluteFill>
	);
};

