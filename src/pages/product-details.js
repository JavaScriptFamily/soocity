import Header from '../layout/header';
import Footer from '../layout/footer';
import ProductSlider from '../layout/product-slider';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductDetails() {
  const data = { show: true, pageName: 'John Doe' };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend API
    axios.get('https://soocity.in/soocity-api/product.php')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="App">
      <Header data={data} />
      
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row">
            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <ProductSlider />
            </div>

            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">
                  {products.name}
                </h3>
                <p>₹ {products.price}</p>
                <p className="stext-113 cl6 p-b-26">
                  {products.description}
                </p>
                <p>Brand: {products.brand}</p>
                <p className="stext-113 cl6 p-b-26">
                  Size Available: {products.size}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductDetails;
