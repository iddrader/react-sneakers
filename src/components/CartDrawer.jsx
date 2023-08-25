function CartDrawer({onClose, cart, onRemove}) {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина<img src="/img/button-remove.svg" alt="" onClick={onClose} /></h2>
                {cart.length > 0 ? 
                    <>
                        <div className="items">
                            {cart.map( (element, index) => (
                                <div key={index} className="cartItem">
                                    <div style={{ backgroundImage: `url(${element.imageURL}`}} className="image"></div>            
                                    <div className="info">
                                        <p>{element.title}</p>
                                        <b>{element.price} руб.</b>
                                    </div>
                                    <img className="removeBtn" src="/img/button-remove.svg" alt="" onClick={() => onRemove(element.id)}/>
                                </div>)
                            )}
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
                    </>
                :
                    <div className="cartEmpty">
                        <img src="/img/cartEmpty.png" alt="" width="120px" height="120px" />
                        <h2>Корзина пустая</h2>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="greenButton" onClick={onClose}>
                            <img src="/img/arrow.svg" alt="" className="arrowBack"/>
                            Вернуться назад
                        </button>
                    </div>
                }
                
            
            </div>
        </div>
    )
}

export default CartDrawer;