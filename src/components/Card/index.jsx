import { useState } from 'react';
import styles from './Card.module.scss';

function Card({title, price, imageURL, onFavourite, onAddToCart}) {
  const [isChecked, setIsChecked] = useState(false);
  
  const onClickPlus = () => {
    onAddToCart({title, price, imageURL});
    setIsChecked(isChecked => !isChecked)
  }

  return (
      <div className={styles.card}>
        <div className={styles.favourite}>
          <img 
            src="/img/heart-unliked.svg" 
            alt="" 
            onClick={onFavourite}
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