import { useState } from 'react'

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="wrapper">
      { showCart && <CartDrawer /> }
      <Header />
      <div className="content">
        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
