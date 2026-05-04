import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  function handleFilter(e) {
    setCategory(e.target.value)
  }

  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category)

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome to our shopping app! Browse products and add them to your cart.</p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App;