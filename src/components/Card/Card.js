import styles from './Card.module.css'
import itemHeart from '../../assets/heart_item.svg'

import { UserContext } from '../../App'
import { useContext } from 'react'

const Card = (props) => {
    const user = useContext(UserContext);
    return (
        <div className={`${styles.container} fadeNode`}>
            <div className={styles.image_container}>
                <img src={props.image} alt="Product"></img>
            </div>
            <h5>{props.name}</h5>
            <h6>{props.price}</h6>
            <div className={styles.interaction_container}>
                <img src={itemHeart} alt="Liked" height="20px"></img>
            </div>
            <div className={styles.item_action}>
                <h4>+ Add to Cart</h4>
            </div>
        </div>
    )
}

export default Card