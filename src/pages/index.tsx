import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				<Heading as='h1' className='hero__title'>
					{siteConfig.title}
				</Heading>
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className='button button--secondary button--lg' to='/docs/intro'>
						Explore <img src='/img/reading-book.png' alt='reading-book.png' width={28} height={28} />
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`Selam from ${siteConfig.title}`} description='This is my collection of books, articles and more...'>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
