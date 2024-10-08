import styles from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

type Props = {
	ayah: string;
	src: string;
	url: string;
};

const VerseWrap = ({ ayah, src, url }: Props) => {
	return (
		<div className={clsx('container', styles.wrap)}>
			<section className=''>
				<div className={styles.wrapIcon}>
					<img src='/svg/1620690073الله.svg' className={styles.icon} />
				</div>
				<strong>Allahu Teala thotë:</strong>
			</section>

			<p>"{ayah}"</p>

			<div className={styles.src}>
				<i>{src}</i>

				<Link href={url} target='_blank'>
					<FontAwesomeIcon icon={faUpRightFromSquare} className='px-1' />
				</Link>
			</div>
		</div>
	);
};

export default VerseWrap;
