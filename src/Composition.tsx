import {Sequence, Series} from 'remotion';
import { FirstQAScene } from './FirstQAScene';
import { EmojiComposition } from './EmojiComposition';
import { FirstTextScene } from './FirstTextScene';
import { SecondTextScene } from './SecondTextScene';
import { ThirdTextScene } from './ThirdTextScene';
import { FirstVideoScene } from './FirstVideoScene';
import { SecondVideoScene } from './SecondVideoScene';
import { WinnersScene } from './WinnersScene';
import { ActionScene } from './ActionScene';

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
        <Sequence from={818} durationInFrames={173}>
            <ActionScene/>
        </Sequence>
        <Sequence from={638} durationInFrames={200}>
            <WinnersScene/>
        </Sequence>
        <Sequence from={333} durationInFrames={314}>
            <SecondVideoScene/>
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
