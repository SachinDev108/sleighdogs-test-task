import React from 'react'
import Styles from './styles.scss'
import Banner from '../Banner/index.jsx'
import FeatureProduct from '../FeatureProduct/index.jsx'
import NewsAndResource from '../NewsAndResource/index.jsx'

const LandingPage = () => {
	return(
		<div>
			<Banner/>
			<FeatureProduct 
				infinite={true}
				speed={500}
				slidesToShow={4}
				slidesToScroll={1}
			/>
			<NewsAndResource />
		</div>	
	)
}

export default LandingPage