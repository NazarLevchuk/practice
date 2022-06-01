import React from 'react'
import s from './AboutContent.module.scss'

export const AboutContent = () => {
	return (
		<div className={s.aboutContent_container}>
			<div className={s.aboutContentTitle}>
				<div className={s.aboutContentTitleTextBody}>
					<div className={s.aboutContentTitleText}>Home<span>/</span>About</div>
				</div>
			</div>
			<div className={s.aboutContentBody}>
				<h2 className={s.aboutContentSubTitle}><span>/</span>Our History</h2>
				<div className={s.aboutContentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel, in sint dignissimos optio perferendis recusandae accusantium architecto laboriosam ad soluta obcaecati? Explicabo dicta, quae placeat aspernatur asperiores molestias neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel, in sint dignissimos optio perferendis recusandae accusantium architecto laboriosam ad soluta obcaecati? Explicabo dicta, quae placeat aspernatur asperiores molestias neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel, in sint dignissimos optio perferendis recusandae accusantium architecto laboriosam ad soluta obcaecati? Explicabo dicta, quae placeat aspernatur asperiores molestias neque!</div>
			</div>
		</div>
	)
}