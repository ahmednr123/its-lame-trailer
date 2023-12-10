import {Audio, Sequence, Series, staticFile} from 'remotion';
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
            <Series.Sequence durationInFrames={200}>
                <FirstQAScene/>
            </Series.Sequence>
        </Series>
        <Sequence from={200} durationInFrames={85}>
            <FirstTextScene />
        </Sequence>
        <Sequence from={925} durationInFrames={173}>
            <ActionScene/>
        </Sequence>
        <Sequence from={740} durationInFrames={200}>
            <WinnersScene/>
        </Sequence>
        <Sequence from={375} durationInFrames={374}>
            <SecondVideoScene/>
        </Sequence>
        <Sequence from={280} durationInFrames={110}>
            <FirstVideoScene/>
        </Sequence>
        <Sequence from={160} durationInFrames={60}>
            <EmojiComposition />
        </Sequence>
        <Audio src={staticFile('funky.wav')} volume={0.25} />
    </>
	);
};
