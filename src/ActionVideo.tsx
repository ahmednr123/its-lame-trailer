import {AbsoluteFill, Easing, interpolate, interpolateColors, useCurrentFrame} from 'remotion';
import { loadFont as LoadLexend } from '@remotion/google-fonts/Lexend';
import { loadFont as LoadLondrina} from '@remotion/google-fonts/LondrinaSolid';

const animArr = [
    [1.32, -1.50],
    [-0.26, -1.98],
    [-1.66, -1.12],
    [-1.93, 0.51],
    [-0.90, 1.79],
    [0.75, 1.85],
    [1.89, 0.66],
    [1.74, -0.98],
    [0.41, -1.96],
    [-1.20, -1.60],
    [-1.99, -0.16],
    [-1.44, 1.39],
    [0.10, 2.00],
    [1.56, 1.25],
    [1.97, -0.35],
    [1.04, -1.71],
    [-0.60, -1.91],
    [-1.83, -0.81],
    [-1.81, 0.84],
    [-0.57, 1.92],
    [1.32, -1.50]
];

function animFunc (frame: number, fps: number, arr: any[], seconds: number, {reverse,offset}: {reverse?:boolean, offset?:number}) {
    const totalFrames = seconds * fps;
    const currentFrame = (frame+(offset?offset:0))%totalFrames;
    const perc = currentFrame/totalFrames;
    const index = Math.round(perc*(arr.length-1));
    const translate = arr[reverse ? (arr.length-1)-index : index];
    return `translate(${translate[0]*1.5}px,${translate[1]*1.5}px)`;
}

export const ActionVideo: React.FC = () => {
    const lexendFontFamily = LoadLexend().fontFamily;
    const londrinaFontFamily = LoadLondrina().fontFamily;
    const frame = useCurrentFrame();

    const backgroundMovement = interpolate(frame, [0, 120], [0, -1000]);

    const lameLogo = interpolate(frame, [8, 28], [0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.exp
    });

    const gradientOpacity = interpolate(frame, [30, 50], [0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const footerOpacity = interpolate(frame, [40, 60], [0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.exp
    });

    const logoAnim = animFunc(frame, 30, animArr, 10, {});

    const videoOpacity = interpolate(frame, [10,22],[0,1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    return (
		<div style={{
            opacity: `${videoOpacity}`,
            overflow: 'hidden',
            height: '800px'
        }} className="bg-[#5DB09E] flex items-center justify-center">
            <div id="bg-pattern" style={{transform: `translateY(${backgroundMovement}px)`}}></div>
            <div style={{fontFamily: londrinaFontFamily, opacity: `${lameLogo}`, transform: 'translateY(60px)', textShadow:'-16px 16px #071F21', WebkitTextStroke:'5px #071F21'}} className="z-10 text-[#F4F2F3] text-[300px] leading-[0.8]">
                <div style={{transform: logoAnim}}>
                    <div className='text-[150px]'>IT'S</div>
                    <div>LAME</div>
                </div>
            </div>
            <div style={{opacity: `${gradientOpacity}`}} className='gradient'></div>
            <div style={{opacity: `${footerOpacity}`}} className='absolute bottom-[50px] flex justify-between w-[90%]'>
                <div className='mt-[40px]'>
                    <svg width="200" height="100" viewBox="0 0 79 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="79" height="45.9567" rx="1" fill="#0F5A4A"/>
                        <rect x="2.65918" y="23.9283" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="2.65869" y="37.6693" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="9.5293" y="46.1254" width="15.3268" height="5.63744" transform="rotate(-90 9.5293 46.1254)" fill="white"/>
                        <rect x="8.11987" y="23.9281" width="19.2025" height="5.46127" transform="rotate(90 8.11987 23.9281)" fill="white"/>
                        <rect x="48.9915" y="23.928" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="48.9912" y="37.6692" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="48.9912" y="30.7986" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="54.4526" y="23.928" width="19.2025" height="5.46127" transform="rotate(90 54.4526 23.928)" fill="white"/>
                        <rect x="62.7322" y="23.928" width="13.5651" height="5.46127" fill="white"/>
                        <rect x="62.7319" y="30.7986" width="13.5651" height="5.46127" fill="white"/>
                        <rect x="62.7319" y="37.6693" width="13.5651" height="5.46127" fill="white"/>
                        <rect x="68.1931" y="23.928" width="12.3319" height="5.46126" transform="rotate(90 68.1931 23.928)" fill="white"/>
                        <rect x="76.2971" y="30.7986" width="12.3319" height="5.46126" transform="rotate(90 76.2971 30.7986)" fill="white"/>
                        <rect x="16.2236" y="23.928" width="15.1506" height="5.46127" fill="white"/>
                        <rect x="16.2236" y="30.7986" width="15.1506" height="5.46127" fill="white"/>
                        <rect x="21.6851" y="23.928" width="19.2025" height="5.46127" transform="rotate(90 21.6851 23.928)" fill="white"/>
                        <rect x="31.3738" y="23.928" width="19.2025" height="5.46127" transform="rotate(90 31.3738 23.928)" fill="white"/>
                        <rect x="38.0691" y="23.9279" width="19.2025" height="5.46127" transform="rotate(90 38.0691 23.9279)" fill="white"/>
                        <rect x="37.9783" y="23.9279" width="8.19139" height="5.46127" transform="rotate(46.4982 37.9783 23.9279)" fill="white"/>
                        <rect x="46.4502" y="27.6021" width="8.02299" height="5.46127" transform="rotate(132.281 46.4502 27.6021)" fill="white"/>
                        <rect x="43.873" y="32.1938" width="5.23825" height="5.46127" transform="rotate(135 43.873 32.1938)" fill="white"/>
                        <rect x="47.7585" y="23.9279" width="19.2025" height="5.46127" transform="rotate(90 47.7585 23.9279)" fill="white"/>
                        <rect x="2.65942" y="2.46643" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="2.65894" y="16.2076" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="8.12012" y="2.46643" width="19.2025" height="5.46127" transform="rotate(90 8.12012 2.46643)" fill="white"/>
                        <rect x="49.168" y="2.46643" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="49.1677" y="16.2076" width="12.3319" height="5.46127" fill="white"/>
                        <rect x="54.6289" y="2.46643" width="19.2025" height="5.46127" transform="rotate(90 54.6289 2.46643)" fill="white"/>
                        <rect x="62.7329" y="10.0417" width="13.7412" height="5.46127" fill="white"/>
                        <rect x="68.8992" width="21.6689" height="6.16594" transform="rotate(90 68.8992 0)" fill="white"/>
                        <rect x="76.4741" y="2.46643" width="19.2025" height="6.16594" transform="rotate(90 76.4741 2.46643)" fill="white"/>
                        <rect x="16.2239" y="2.46643" width="15.1506" height="5.46127" fill="white"/>
                        <rect x="16.2244" y="16.2076" width="15.1506" height="5.46127" fill="white"/>
                        <rect x="23.0947" y="2.46643" width="19.2025" height="6.87062" transform="rotate(90 23.0947 2.46643)" fill="white"/>
                        <rect x="31.3748" y="2.46643" width="19.2025" height="6.87062" transform="rotate(90 31.3748 2.46643)" fill="white"/>
                        <rect x="32.6082" y="16.2076" width="15.1506" height="5.46127" fill="white"/>
                        <rect x="39.4785" y="2.46643" width="19.2025" height="6.87062" transform="rotate(90 39.4785 2.46643)" fill="white"/>
                        <rect x="47.9346" y="2.46643" width="19.2025" height="7.04679" transform="rotate(90 47.9346 2.46643)" fill="white"/>
                    </svg>
                </div>
                <div style={{fontFamily: lexendFontFamily, transform: `translateY(40px)`}} className="text-[50px] leading-[1] text-right text-white">
                    <div>Play now on</div>
                    <div className='font-bold'>couchgames.io</div>
                </div>
            </div>
        </div>
	);
};