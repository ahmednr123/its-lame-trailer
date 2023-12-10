import {AbsoluteFill, Audio, Easing, interpolate, interpolateColors, Sequence, staticFile, useCurrentFrame} from 'remotion';
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

    const moveHandX = interpolate(frame, [140, 160, 168, 198], [200,0,0,200], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic)
    })

    const moveHandY = interpolate(frame, [140, 160, 168, 198], [520,0,0,520], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.cubic)
    })

    const handScale = interpolate(frame, [160,164,165,170], [1,0.85,0.85,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const firstTextPosition = interpolate(frame, [195, 215], [0,-800], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.sin
    });

    const videoPosition = interpolate(frame, [195, 215, 263, 273], [0,-640, -640, -200], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: frame < 233 ? Easing.sin : Easing.in(Easing.sin)
    });

    const fullSweep = interpolate(frame, [364, 374], [0,-100], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.sin
    });

    const background = interpolateColors(frame, [0,6], ["rgb(0,0,0)","rgb(244, 242, 243)"]);

    return (
		<AbsoluteFill style={{
            background,
            transform: `translateX(${fullSweep}%)`
        }} className="p-[100px] items-center justify-center z-40">
            <div style={{fontFamily, transform: `translateY(${firstTextPosition}px)`}} className='text-[#071F21] text-[100px] w-[98%] font-extrabold leading-[1.1] mt-[50px]'>
                <div><span style={{opacity:revealAfter(frame,20)}}>VOTE</span><span style={{opacity:revealAfter(frame,30)}} className='ml-[40px]'>FOR</span></div>
                <div><span style={{opacity:revealAfter(frame,35)}}>THE</span><span style={{opacity:revealAfter(frame,40)}} className='ml-[40px]'>FUNNIEST</span></div>
                <div><span style={{opacity:revealAfter(frame,50)}}>ANSWER</span></div>
            </div>
            <div style={{fontFamily, transform: 'translateY(-520px)', opacity:revealAfter(frame,315)}} className='absolute text-[#071F21] text-[150px] font-extrabold'>TYPICAL</div>
            <div style={{opacity: `${opacity}`, transform: `translateY(${videoPosition}px)`}} className='opacity-0'>
                <SecondVideo />
            </div>
            <div style={{fontFamily, transform: 'translateY(500px)', opacity:revealAfter(frame,325)}} className='absolute text-[#071F21] text-[150px] font-extrabold'>MODI JI!</div>
            <div style={{fontFamily}} className='absolute text-[#071F21] text-[150px] w-[98%] font-extrabold leading-[1.1] mt-[900px] left-[170px]'>
                <div><span style={{opacity:revealAfter(frame,215,250)}}>WHO</span></div>
                <div><span style={{opacity:revealAfter(frame,220,255)}} className='ml-[100px]'>COULD</span></div>
                <div><span style={{opacity:revealAfter(frame,228,260)}} className='ml-[300px]'>IT</span></div>
                <div><span style={{opacity:revealAfter(frame,240,265)}} className='ml-[450px]'>BE?</span></div>
            </div>
            <div style={{rotate: '-30deg', transform: `translate(${moveHandX}px,${moveHandY}px)`, scale: `${handScale}`}} className='absolute text-[240px] bottom-[70px] left-[600px]'>👆🏾</div>
            <Sequence from={160}>
                <Audio src={staticFile("click.wav")}/>
            </Sequence>
            <Sequence from={21}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={31}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={36}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={40}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={51}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={116}>
                <Audio src={staticFile("notification.mp3")} />
            </Sequence>
            <Sequence from={188}>
                <Audio src={staticFile("notification-done.mp3")} volume={0.5} />
            </Sequence>
            <Sequence from={198}>
                <Audio src={staticFile("quick-woosh.wav")} />
            </Sequence>
            <Sequence from={216}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={221}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={229}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={240}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            
            <Sequence from={251}>
                <Audio src={staticFile("notification-done.mp3")} volume={0.3} />
            </Sequence>
            <Sequence from={256}>
                <Audio src={staticFile("notification-done.mp3")} volume={0.3} />
            </Sequence>
            <Sequence from={260}>
                <Audio src={staticFile("notification-done.mp3")} volume={0.3} />
            </Sequence>
            <Sequence from={265}>
                <Audio src={staticFile("notification-done.mp3")} volume={0.3} />
            </Sequence>

            <Sequence from={265}>
                <Audio src={staticFile("quick-woosh.wav")}/>
            </Sequence>
            <Sequence from={316}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={326}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={325}>
                <Audio src={staticFile("ping.mp3")}/>
            </Sequence>
            <Sequence from={330}>
                <Audio src={staticFile("ping.mp3")}/>
            </Sequence>
            <Sequence from={335}>
                <Audio src={staticFile("ping.mp3")}/>
            </Sequence>
            <Sequence from={360}>
                <Audio src={staticFile("whoosh.mp3")}/>
            </Sequence>
        </AbsoluteFill>
	);
};

