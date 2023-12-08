import {Sequence, Series} from 'remotion';
import { FirstQAScene } from './FirstQAScene';
import { EmojiComposition } from './EmojiComposition';
import { FirstTextScene } from './FirstTextScene';
import { SecondTextScene } from './SecondTextScene';
import { ThirdTextScene } from './ThirdTextScene';

export const MyComposition: React.FC = () => {
	return (
    <>
        <Series>
            <Series.Sequence durationInFrames={180}>
                <FirstQAScene/>
            </Series.Sequence>
        </Series>
        <Sequence from={180} durationInFrames={80}>
            <FirstTextScene />
        </Sequence>
        <Sequence from={260} durationInFrames={55}>
            <SecondTextScene />
        </Sequence>
        <Sequence from={315} durationInFrames={85}>
            <ThirdTextScene />
        </Sequence>
        <Sequence from={140} durationInFrames={60}>
            <EmojiComposition />
        </Sequence>
    </>
	);
};
