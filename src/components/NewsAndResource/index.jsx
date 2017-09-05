import React from 'react'
import classnames from 'classnames'
import Styles from './styles.scss'
import LionImage from '../../images/lion.jpeg'

const NewsAndResource = (props) => {

	const imageAlt = "Lion Image"
	return(
    <div className="container">
      <div className={Styles.title}>
        News and resources
      </div>
  		<ul className={classnames("list-inline", "text-center")}>
        <li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(Styles.imageWidth, Styles.left)}
    			/>
          <NewsDetail />
        </li>  
    		<li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(Styles.imageWidth, Styles.left)}
  			  />
          <NewsDetail />
    		</li>
    		<li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(Styles.imageWidth, Styles.left)}
    			/>
          <NewsDetail />
    		</li>
      </ul>
    </div>      
  )
}

const NewsDetail = () => {
  return(
    <div>
      <p className={Styles['news-row-one']}>
        <span className={Styles['news-title']}>
          News title
        </span>
      </p>
      <p className={Styles['news-row-two']}>
        <span className={Styles['short-description']}>
          Praesent pulvinar sapien fermentum, faucibus diam congue, ultricies turpis.
        </span>
      </p>
      <p className={Styles['news-row-three']}>
        <span className={Styles['read-more']}>
          Read more
        </span>
      </p>
    </div>    
  )
}
export default NewsAndResource