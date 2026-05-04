import React from 'react'

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Banana", category: "Fruits" },
  { id: 3, name: "Milk", category: "Dairy" }
];

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button
            data-testid={`product-${product.id}`}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList;