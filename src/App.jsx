import { useState } from 'react'

import Card from "./components/Card";
import Header from "./components/Header.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

const arr = [
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageURL: "/img/sneakers/1.jpg"
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageURL: "/img/sneakers/2.jpg"
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageURL: "/img/sneakers/3.jpg"
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageURL: "/img/sneakers/4.jpg"
  },
]

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
          { arr.map( element => 
            <Card 
              title={element.title} 
              price={element.price} 
              imageURL={element.imageURL} 
              key={element.title} 
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
