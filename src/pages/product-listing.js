import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Banner from '../layout/banner';
import { Link } from 'react-router-dom';
function ProductListing() {
    const data = { show: true, pageName: "Men's shoes" };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from the backend API
        axios.get('https://soocity.in/soocity-api/products.php')
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
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Men's Shoes
                </h2>
            </section>
            <Banner />
            <div className="col-md-12">
                <div className="quote-card">
                    <p className="quote-text">Walk the talk of style with our fashionable shoe selection.</p>
                </div>
            </div>
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
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
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductListing;
