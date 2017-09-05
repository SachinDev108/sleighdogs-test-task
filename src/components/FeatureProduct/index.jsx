import React from 'react'
import styles from './styles.scss'
import Slider from 'react-slick'
import LionImage from '../../images/lion.jpeg'

const FeatureProduct = (props) => {

	const imageAlt = "Lion Image"
	const settings = {
    dots: props.dots,
    infinite: props.infinite,
    speed: props.speed,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
  }
  return(
    <div className="container">
      Feature Products
    	<Slider {...settings}>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={styles.imageWidth}
    			/>

        </div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={styles.imageWidth}
    			/>
    		</div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={styles.imageWidth}
    			/>
    		</div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={styles.imageWidth}
    			/>
    		</div>
    	</Slider>
      <p>
        <a href="#" className="btn btn-primary">Shop the range</a>
      </p>
    </div>    
  )
}

export default FeatureProduct