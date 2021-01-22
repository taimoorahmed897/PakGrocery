import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from './screens/CartScreen';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open")
}
const closeMenu=()=>
{
    document.querySelector(".sidebar").classList.remove("open")
}
  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to ="/">PakGrocery</Link>
            
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            
            <a href="signin">Sign In</a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-closebtn" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Vegetables</a>
            </li>
            <li>
                <a href="index.html">Fruits</a>
            </li>
            <li>
                <a href="index.html">Snacks</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <Route path="/" exact={true} component={HomeScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
    </div>
    </main>
    <footer className="footer">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
