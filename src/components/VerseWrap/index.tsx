import styles from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = {
	ayah: string;
	src: string;
	url: string;
};

const VerseWrap = ({ ayah, src, url }: Props) => {
	return (
		<div className={styles.wrap}>
			<section>
				<FontAwesomeIcon icon={faBookQuran} className={styles.icon} />
				<strong>Ajet</strong>
				<div>
					<i>{src}</i>

					<a href={url} target='_blank'>
						<FontAwesomeIcon icon={faUpRightFromSquare} className='px-1' />
					</a>
				</div>
			</section>

			<p>"{ayah}"</p>
		</div>
	);
};

export default VerseWrap;
