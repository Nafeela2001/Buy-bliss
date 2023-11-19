import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "kurta", price: 499, image: "https://www.bargello.com/images/thumbs/0016395_exclusive-raw-silk-kurta-pajama-suits_800.jpeg", description: "Fashion Sale" },
    { id: 2, name: "Earphone", price: 799, image: "https://5.imimg.com/data5/SA/WB/MY-38219723/apple-mobile-earphone.jpg", description: "Hear u go" },
    { id: 3, name: "Mobile", price: 80999, image: "https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323", description: "Design Speaks" },
    { id: 4, name: "Case Cover", price: 550, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1630017615/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/239917_kff12s.png", description: "Safeguard" },
    { id: 5, name: "Handbags", price: 1200, image: "https://tiimg.tistatic.com/fp/1/007/861/womens-fancy-designer-white-and-maroon-beautiful-and-convenient-handbag--856.jpg", description: "Trend Zone" },
    { id: 6, name: "Stationary", price: 800, image: "https://www.tinyminymo.com/cdn/shop/files/Sakura-stationery-set_1200x1200.jpg?v=1690978807", description: "Worth Buy" },
    // Add more product entries as needed
  ]);

  const [cartCount, setCartCount] = useState(0);

  const addToCart = (productId) => {
    // Add logic to update the cart (for simplicity, just incrementing count here)
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BUY-BLISS</h1>
      </header>

      <section className="product-listing">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      <div id="cart-modal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>Your Cart</h2>
          <p>Items in Cart: {cartCount}</p>
          {/* Add more cart details and functionality here */}
        </div>
      </div>
    </div>
  );
}

export default App;

