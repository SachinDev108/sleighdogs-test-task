import React from 'react'
import classnames from 'classnames'
import Styles from './styles.scss'
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
    className: 'slides',
    responsive: [
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 995,
        settings: { 
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 4,
          arrows: true,
          nextArrow: <nextArrow />,
          prevArrow: <prevArrow />
        }
      }
    ]
  }
  return(
    <div className="container">
      <div className={Styles.title}>
        Feature Products
      </div>
    	<Slider {...settings}>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={Styles.imageWidth}
    			/>
          <ProductDetail />
        </div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={Styles.imageWidth}
    			/>
          <ProductDetail />
    		</div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={Styles.imageWidth}
    			/>
          <ProductDetail />
    		</div>
    		<div>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={Styles.imageWidth}
    			/>
          <ProductDetail />
    		</div>
    	</Slider>
      <p className={Styles['shop-button']}>
        <a href="#" className={classnames("btn", "btn-primary")}>Shop the range</a>
      </p>
    </div>    
  )
}

const ProductDetail = () => {
  return(
    <div>
      <p className={Styles['product-row-one']}>
        <span className={Styles['product-name']}>
          Product Title
        </span>
        <span className={Styles['product-price']}>
          14.95 &euro;
        </span>
      </p>
      <p className={Styles['product-row-two']}>
        <span className={Styles['product-description']}>
          Lorem ipsum sit dolor amet lorem ipsum sit dolor
        </span>
      </p>
    </div>  
  )
}

const nextArrow = () => {
  return(
    <i className={classnames("fa", "fa-arrow-right")}></i>
  )
}

const prevArrow = () => {
  return(
    <i className={classnames("fa", "fa-arrow-left")}></i>
  )
}

export default FeatureProduct