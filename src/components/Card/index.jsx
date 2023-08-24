import styles from './Card.module.scss';

function Card({title, price, imageURL}) {
  const onClickButton = () => {
    alert(title)
  }

  return (
      <div className={styles.card}>
        <div className={styles.favourite}>
          <img src="/img/heart-unliked.svg" alt="" />
        </div>
        <img width={133} height={112} src={imageURL} alt="" />
        <h5>{title}</h5>
        <div className={styles.cardBottom}>
          <div className={styles.price}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img width={32} height={32} src="/img/button-plus.svg" alt="Plus" onClick={onClickButton}/>
        </div>
      </div>
  )
}

export default Card;