import {AbsoluteFill} from 'remotion';
import { Question } from './Question';
import { Answer, AnswerType } from './Answer';
import { Emoji } from './Emoji';

export const MyComposition: React.FC = () => {
	return (
		<AbsoluteFill className="bg-[#5DB09E] items-center justify-center">
			<Question question="What would make Mahatma Gandhi choose violence?" />
			<Answer answer='Switch his playlist to heavy metal' type={AnswerType.FIRST} startFrame={50} endFrame={60} />
			<Answer answer='Gift him a comb' type={AnswerType.SECOND} startFrame={80} endFrame={90} />
            <Emoji />
		</AbsoluteFill>
	);
};
