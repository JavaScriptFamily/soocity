import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function ProductHomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the backend API
        axios.get('https://soocity.in/soocity-api/home-products.php')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="quote-card">
                            <p className="quote-text">Shoes that speak volumes about your style.</p>
                        </div>
                    </div>
                </div>
                <div className="row isotope-grid">
                    {products.map((product) => (
                        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" key={product.id}>
                            <div className="block2">
                                <div className="block2-pic hov-img0">
                                    <img src={product.image_url} alt="IMG-PRODUCT" />
                                    <Link to="/product-details" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> View Details</Link>
                                </div>
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <Link to="/product-details" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> {product.name}</Link>
                                        <span className="stext-105 cl3">
                                        ₹ {product.price} 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Load more */}
                <div className="flex-c-m flex-w w-full p-t-45">
                    <Link to="/product-listing" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"> All Products</Link>
                </div>
            </div>
        </section>
    );
}

export default ProductHomePage;