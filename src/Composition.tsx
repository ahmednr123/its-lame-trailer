import {Sequence, Series} from 'remotion';
import { FirstQAScene } from './FirstQAScene';
import { EmojiComposition } from './EmojiComposition';
import { FirstTextScene } from './FirstTextScene';
import { SecondTextScene } from './SecondTextScene';
import { ThirdTextScene } from './ThirdTextScene';
import { FirstVideoScene } from './FirstVideoScene';

export const MyComposition: React.FC = () => {
	return (
    <>
        <Series>
            <Series.Sequence durationInFrames={180}>
                <FirstQAScene/>
            </Series.Sequence>
        </Series>
        <Sequence from={180} durationInFrames={85}>
            <FirstTextScene />
        </Sequence>
        <Sequence from={260} durationInFrames={80}>
            <FirstVideoScene/>
        </Sequence>
        <Sequence from={140} durationInFrames={60}>
            <EmojiComposition />
        </Sequence>
    </>
	);
};
