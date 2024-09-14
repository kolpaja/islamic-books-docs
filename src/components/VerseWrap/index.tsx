import styles from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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
			<section className='container'>
				<FontAwesomeIcon icon={faBookQuran} className={styles.icon} />
				<strong>Ajet</strong>
			</section>

			<p>"{ayah}"</p>

			<div>
				<i>{src}</i>

				<Link href={url} target='_blank'>
					<FontAwesomeIcon icon={faUpRightFromSquare} className='px-1' />
				</Link>
			</div>
		</div>
	);
};

export default VerseWrap;
