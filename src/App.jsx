import { useEffect, useState } from 'react'

import Card from "./components/Card";
import Header from "./components/Header.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import axios from 'axios';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("https://64e741bab0fd9648b78fa282.mockapi.io/items")
      .then(response => setItems(response.data))
    axios.get('https://64e741bab0fd9648b78fa282.mockapi.io/cart')
      .then(response => setCart(response.data))
  }, [])

  const onAddToCart = (newItem) => {
    axios.post("https://64e741bab0fd9648b78fa282.mockapi.io/cart", newItem)
    setCart(cart => [...cart, newItem])
    console.log(cart)
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://64e741bab0fd9648b78fa282.mockapi.io/cart/${id}`);
    setCart((prev) => prev.filter(item => item.id !== id))
  }

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      { showCart && 
        <CartDrawer 
          onClose={() => setShowCart(false)} 
          cart={cart}
          setCart={setCart}
          onRemove={onRemoveCart}
        /> 
      }
      <Header onClickCart={() => setShowCart(true)} />
      <div className="content">
        <div className="contentHeader">
          <h1>{ searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." value={searchValue} onChange={onSearchChange}/>
            { searchValue && <img src="/img/button-remove.svg" alt="" onClick={() => setSearchValue("")}/>}
          </div>
        </div>
        <div className="sneakers">
          { items && items
                      .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                      .map( (element, index) => 
                        <Card 
                          title={element.title} 
                          price={element.price} 
                          imageURL={element.imageURL} 
                          onAddToCart={onAddToCart}
                          key={index} 
                        />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
