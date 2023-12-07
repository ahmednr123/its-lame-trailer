import {AbsoluteFill} from 'remotion';
import { Question } from './Question';
import { Answer, AnswerType } from './Answer';

export const MyComposition: React.FC = () => {
	return (
		<AbsoluteFill className="bg-[#5DB09E] items-center justify-center">
			<Question question='Why was 6 scared of 7?' />
			<Answer answer='cause 7 was a registered sex offender' type={AnswerType.FIRST} />
			<Answer answer='cause 7 ate 9' type={AnswerType.SECOND} />
		</AbsoluteFill>
	);
};
