import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
    { id: 2, name: 'Headphones', price: 199, category: 'electronics' },
    { id: 3, name: 'Coffee Mug', price: 15, category: 'home' },
    { id: 4, name: 'T-Shirt', price: 25, category: 'clothing' },
    { id: 5, name: 'Sneakers', price: 120, category: 'clothing' },
    { id: 6, name: 'Blender', price: 89, category: 'home' }
  ]

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome to our shopping app! Browse through our selection of products and add your favorites to the cart.
      </p>

      <DarkModeToggle darkMode={darkMode}
       setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>

        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="home">Home</option>
        <option value="clothing">Clothing</option>
      </select>

      <ProductList
       products={filteredProducts} 
       onAddToCart={handleAddToCart}
       />

      <Cart cart={cart} />
    </div>
  )
}

export default App
