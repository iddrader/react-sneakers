import { useContext } from "react";

function Header({onClickCart}) {

    return (
        <header>
            <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" className="mr-15" />
            <div>
                <h3>React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="headerRight">
            <li onClick={onClickCart}>
                <img src="/img/cart.svg" /><span>1205 руб.</span>
            </li>
            <li>
                <img src="/img/user.svg"/>
            </li>
            </ul>
        </header>
    )
}

export default Header;