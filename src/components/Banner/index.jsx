import React from 'react'
import Styles from './styles.scss'
import BannerImage from '../../images/banner.jpeg'
const Banner = () => {
	const alt = "Banner Image"
	return(
		<section className="jumbotron text-center">
      <div className="container">
        <img 
					alt={alt}
					src={BannerImage}
					className={Styles.banner}
				/>
      </div>
    </section>
	)
}

export default Banner