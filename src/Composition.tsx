import {AbsoluteFill, Series} from 'remotion';
import { Question } from './Question';
import { Answer, AnswerType } from './Answer';
import { Emoji } from './Emoji';
import { FirstQAScene } from './FirstQAScene';

export const MyComposition: React.FC = () => {
	return (
        <Series>
            <Series.Sequence durationInFrames={160}>
                <FirstQAScene/>
            </Series.Sequence>
            <Series.Sequence offset={140} durationInFrames={20}>
                <Emoji/>
            </Series.Sequence>
        </Series>
	);
};
