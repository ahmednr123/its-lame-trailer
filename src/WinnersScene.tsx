import {AbsoluteFill, Audio, Easing, interpolate, interpolateColors, Sequence, staticFile, useCurrentFrame} from 'remotion';
import { loadFont } from '@remotion/google-fonts/Lexend';

import PoopEmoji from './poop.svg';
import CrownEmoji from './crown.svg';

const revealAfter = (frame: number, v: number, f?: number) => {
    if (f && frame > f) {
        return '0';
    }
    if (frame > v) {
        return '1';
    }
    return '0';
}

export const WinnersScene: React.FC = () => {
    const { fontFamily } = loadFont();
    const frame = useCurrentFrame();

    const opacity = interpolate(frame, [10,15], [0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.sin
    });

    const winnersY = interpolate(frame, [10,20,21,60,61,71], [-500, 800, 800, 1200, 1200, 2300], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: frame > 21 && frame < 60 ? Easing.linear : Easing.sin
    });

    const losersY = interpolate(frame, [60,71,72,113,114,124], [-500, 800, 800, 1200, 1200, 2300], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: frame > 72 && frame < 113 ? Easing.linear : Easing.sin
    });

    const lastY = interpolate(frame, [122,195], [0, -200], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: frame > 72 && frame < 113 ? Easing.linear : Easing.sin
    });

    const fullOpacity = interpolate(frame, [185, 198], [1,0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const crownRotate = interpolate(frame, [15, 70], [-20,-15], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const crownX = interpolate(frame, [15, 70], [20,-20], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const crownY = interpolate(frame, [15, 70], [50,-50], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const poopRotate = interpolate(frame, [65, 120], [20,15], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const poopX = interpolate(frame, [65, 120], [-20,20], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const poopY = interpolate(frame, [65, 120], [50,-50], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    return (
		<AbsoluteFill style={{opacity:`${fullOpacity}`}} className="bg-[#071F21] items-center justify-center z-30">
            <div style={{fontFamily, opacity: `${opacity}`, bottom: `${winnersY}px`, textShadow: "14px 14px 20px rgba(7, 31, 33, 0.6)"}} className='absolute z-10 text-[150px] leading-[1.1] text-[#F4F2F3] font-extrabold w-[90%]'>
                <div>WINNERS </div>
                <div>WILL GET</div>
                <div>REWARDED!</div>
            </div>
            <div style={{bottom: `${winnersY}px`, transform: "translateY(400px)", rotate: `${crownRotate}deg`}} className="absolute text-[500px]">
                <img style={{transform: `translate(${crownX}px,${crownY}px)`}} width="700px" height="700px" src={CrownEmoji}/>
            </div>
            <div style={{fontFamily, opacity: `${opacity}`, bottom: `${losersY}px`, textShadow: "14px 14px 20px rgba(7, 31, 33, 0.6)"}} className='absolute z-10 mt-[200px] text-[150px] text-right leading-[1.1] text-[#F4F2F3] font-extrabold w-[90%]'>
                <div>LOSERS</div>
                <div>WILL GET</div>
                <div>SHIT ON!</div>
            </div>
            <div style={{bottom: `${losersY}px`, transform: "translateY(400px)", rotate: `${poopRotate}deg`}} className="absolute text-[500px]">
                <img style={{transform: `translate(${poopX}px,${poopY}px)`}} width="700px" height="700px" src={PoopEmoji}/>
            </div>
            <div style={{fontFamily, transform: `translateY(${lastY}px)`}} className='text-[130px] text-center leading-[1.1] text-[#F4F2F3] font-extrabold w-[90%]'>
                { revealAfter(frame, 120) == '1' && <div>TEST YOUR</div> }
                { revealAfter(frame, 135) == '1' && <div>FRIENDS'</div> }
                { revealAfter(frame, 150) == '1' && <div>SENSE OF</div> }
                { revealAfter(frame, 160) == '1' && <div>HUMOR</div> }
                { revealAfter(frame, 165) == '1' && <div>NOW!</div> }
            </div>
            <Sequence from={10}>
                <Audio src={staticFile('winner.wav')} volume={
                    f => interpolate(f,[54,69],[1,0], {extrapolateLeft:'clamp',extrapolateRight:'clamp'})
                } />
            </Sequence>
            <Sequence from={70}>
                <Audio src={staticFile('boo.mp3')} volume={
                    f => interpolate(f,[30,50],[1,0], {extrapolateLeft:'clamp',extrapolateRight:'clamp'})
                } />
            </Sequence>
            <Sequence from={121}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={137}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={151}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={162}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
            <Sequence from={166}>
                <Audio src={staticFile("jab.wav")}/>
            </Sequence>
        </AbsoluteFill>
	);
};

