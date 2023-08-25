import { useState } from 'react';
import styles from './Card.module.scss';

function Card({title, price, imageURL, onAddToCart}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const onClickPlus = () => {
    onAddToCart({title, price, imageURL});
    setIsChecked(isChecked => !isChecked);
  }

  const onClickLiked = () => {
    setIsLiked(isLiked => !isLiked);
  }

  return (
      <div className={styles.card}>
        <div className={styles.favourite}>
          <img 
             src={isLiked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}  
            alt="" 
            onClick={onClickLiked}
          />
        </div>
        <img width={133} height={112} src={imageURL} alt="" />
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.price}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img 
            width={32} 
            height={32} 
            src={isChecked ? "/img/button-checked.svg" : "/img/button-plus.svg"} 
            alt="Plus" 
            onClick={onClickPlus}
          />
        </div>
      </div>
  )
} 

export default Card;