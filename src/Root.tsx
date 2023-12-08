import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { EmojiComposition } from './EmojiComposition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (<>
		<Composition
			id="MyComp"
			component={MyComposition}
			durationInFrames={410}
			fps={30}
			width={1080}
			height={1920}
		/>
    </>);
};
