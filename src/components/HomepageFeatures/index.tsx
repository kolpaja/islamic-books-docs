import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
	png?: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Learn from Outstanding Scholars',
		Svg: require('@site/static/img/muslim-achievements.jpg').default, // Replace with an appropriate SVG related to Islamic scholars
		png: 'img/muslim-achievements.jpg',
		description: (
			<>
				Explore the works of some of the greatest Islamic scholars. From classical Fiqh to contemporary discussions, the app offers a wide range of books to
				deepen your understanding.
			</>
		),
	},
	{
		title: 'Organized by Topic and Chapters',
		Svg: require('@site/static/img/hand-drawn-books.png').default, // Replace with an appropriate SVG of a Quran or Islamic book
		png: 'img/hand-drawn-books.png',
		description: (
			<>
				Browse books organized into topics and chapters for easy reading. Whether it’s Tafsir, Hadith, or spiritual guides, each book is neatly structured for
				easy navigation.
			</>
		),
	},
	{
		title: 'Accessible Anywhere',
		Svg: require('@site/static/svg/all-global.svg').default, // Replace with an appropriate SVG symbolizing global access
		description: (
			<>
				Enjoy reading your favorite Islamic books anytime, anywhere. With the app’s responsive design, you can access the library from any device and continue
				your journey of knowledge.
			</>
		),
	},
];

function Feature({ title, Svg, description, png }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className='text--center'>{png ? <img src={png} className={styles.featurePng} /> : <Svg className={styles.featureSvg} role='img' />}</div>
			<div className='text--center padding-horiz--md'>
				<Heading as='h3'>{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
