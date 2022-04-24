import KommyImage from './Image';
import KommyLink from './Link';
import Pre from './Pre';
import Emoji from './Emoji';
import Admonition from './Admonition';
import FeatureCard from './FeatureCard';

const MDXComponents = {
	a: KommyLink,
	pre: Pre,
	KommyImage,
	Emoji,
	Admonition,
	FeatureCard,
};

export default MDXComponents;
