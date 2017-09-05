import React from 'react'
import classnames from 'classnames'
import Styles from './styles.scss'
import BannerImage from '../../images/banner.jpeg'
const Banner = () => {
	const alt = "Banner Image"
	return(
		<section>
			<img 
				alt={alt}
				src={BannerImage}
				className={classnames("img-fluid", Styles.banner)}
			/>
			<div className={Styles['banner-text']}>
				Lorem ipsum sit dolor <br /> lorem amet
			</div>
    </section>
	)
}

export default Banner