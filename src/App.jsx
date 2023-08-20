function App() {

  return (
    <div className="wrapper">
       <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" className="mr-15" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg" /><span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg"/>
          </li>
        </ul>
       </header>
       <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardBottom">
              <div className="price">
                <span>Цена:</span>
                <b>12999 руб.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom">
            <div className="price">
              <span>Цена:</span>
              <b>12999 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>
        
       </div>
    </div>
  )
}

export default App
