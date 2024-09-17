import styles from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

type Props = {
	hadith: string;
	src: string;
	url: string;
};

const HadithWrap = ({ hadith, src, url }: Props) => {
	return (
		<div className={clsx('', styles.wrap)}>
			<section className=''>
				<div className={styles.wrapIcon}>
					<img src='/svg/prophet-name.svg' className={styles.icon} />
				</div>
				<strong>Resulallahu, s.a.v.s., thotë:</strong>
			</section>

			<p>"{hadith}"</p>

			<div className={styles.src}>
				<i>{src}</i>

				<Link href={url} target='_blank'>
					<FontAwesomeIcon icon={faUpRightFromSquare} className='px-1' />
				</Link>
			</div>
		</div>
	);
};

export default HadithWrap;
