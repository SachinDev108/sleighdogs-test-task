import React from 'react'
import classnames from 'classnames'
import Styles from './styles.scss'
import Banner from '../Banner/index.jsx'
import FeatureProduct from '../FeatureProduct/index.jsx'
import NewsAndResource from '../NewsAndResource/index.jsx'
console.log(Styles)
const LandingPage = () => {
	return(
		<div className={classnames("container-fluid", Styles['no-padding'])}>
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