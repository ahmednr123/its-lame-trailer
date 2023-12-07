import {AbsoluteFill} from 'remotion';
import { Emoji } from './Emoji';

export const EmojiComposition: React.FC = () => {
	return (
		<AbsoluteFill className="bg-[#5DB09E] items-center justify-center">
            <Emoji />
		</AbsoluteFill>
	);
};

