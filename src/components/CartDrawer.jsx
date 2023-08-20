function CartDrawer() {
    return (
        <div className="overlay">
            <div className="drawer">
            <h2>Корзина<img src="/img/button-remove.svg" alt="" /></h2>
            <div className="items">
                <div className="cartItem">
                    <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="image"></div>            
                    <div className="info">
                        <p>Мужские Кроссовки Nike Air Max 270 </p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/button-remove.svg" alt="" />
                </div>
                <div className="cartItem">
                    <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)'}} className="image"></div>
                    <div className="info">
                        <p>Мужские Кроссовки Nike Air Max 270 </p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/button-remove.svg" alt="" />
                </div>
                <div className="cartItem">
                    <div style={{ backgroundImage: 'url(/img/sneakers/3.jpg)'}} className="image"></div>            
                    <div className="info">
                        <p>Мужские Кроссовки Nike Air Max 270 </p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/button-remove.svg" alt="" />
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>21498 руб.</b>
                </li>
                <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>1073 руб.</b>
                </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="" /></button>

            </div>
            
            </div>
        </div>
    )
}

export default CartDrawer;