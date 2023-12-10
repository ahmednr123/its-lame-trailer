import {AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame} from 'remotion';
import { Question } from './Question';
import { Answer, AnswerType } from './Answer';

export const FirstQAScene: React.FC = () => {
	const frame = useCurrentFrame();
	const backgroundMovement = interpolate(frame, [0, 120], [0, -1000]);

	return (
		<AbsoluteFill className="bg-[#5DB09E] items-center justify-center">
			<div id="bg-pattern" style={{transform: `translateY(${backgroundMovement}px)`}}></div>
			<Question question="What would make Mahatma Gandhi choose violence?" />
			<Answer answer='Switch his playlist to heavy metal' type={AnswerType.FIRST} startFrame={50} endFrame={60} />
			<Answer answer='Gift him a comb' type={AnswerType.SECOND} startFrame={80} endFrame={90} />
			<Sequence from={36}>
				<Audio src={staticFile('quick-woosh.wav')} />
			</Sequence>
		</AbsoluteFill>
	);
};
