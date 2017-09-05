import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'
import LionImage from '../../images/lion.jpeg'

const NewsAndResource = (props) => {

	const imageAlt = "Lion Image"
	return(
    <div className="container">
      Feature Products
  		<ul className="list-inline">
        <li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(styles.imageWidth, styles.left)}
    			/>
        </li>  
    		<li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(styles.imageWidth, styles.left)}
  			/>
    		</li>
    		<li>
    			<img
    				alt={imageAlt}
    				src={LionImage}
    				className={classnames(styles.imageWidth, styles.left)}
    			/>
    		</li>
      </ul>
    </div>      
  )
}

export default NewsAndResource