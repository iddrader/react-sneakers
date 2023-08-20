function Card() {
    return (
        <div className="card">
          <div className="favourite">
            <img src="/img/heart-unliked.svg" alt="" />
          </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <img width={32} height={32} src="/img/button-plus.svg" alt="Plus" />
          </div>
        </div>
    )
}

export default Card;