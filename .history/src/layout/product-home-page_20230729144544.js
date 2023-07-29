import { Link } from 'react-router-dom';
function ProductHomePage() {
    return (
        <section className="bg0 p-t-23 p-b-140">
            <div className="container">
                <div className="p-b-10">
                    <h3 className="ltext-103 cl5">
                        Popular Shoes
                    </h3>
                </div>
                <div className="flex-w flex-sb-m p-b-52">
                    <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                    </div>
                </div>
                <div className="row isotope-grid">
                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-pic hov-img0">
                                <img src="images/slider/1.jpg" alt="IMG-PRODUCT" />
                                <Link to="/product-details" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> View Details</Link>
                            </div>
                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to="/product-details" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> Esprit Ruffle Shirt</Link>
                                    <span className="stext-105 cl3">
                                        $16.64
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-pic hov-img0">
                                <img src="images/slider/2.jpg" alt="IMG-PRODUCT" />
                                <Link to="/product-details" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> View Details</Link>
                            </div>
                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to="/product-details" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> Esprit Ruffle Shirt</Link>
                                    <span className="stext-105 cl3">
                                        $35.31
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-pic hov-img0">
                                <img src="images/slider/3.jpg" alt="IMG-PRODUCT" />
                                <Link to="/product-details" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> View Details</Link>
                            </div>
                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to="/product-details" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> Esprit Ruffle Shirt</Link>
                                    <span className="stext-105 cl3">
                                        $25.50
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                        {/* Block2 */}
                        <div className="block2">
                            <div className="block2-pic hov-img0">
                                <img src="images/slider/4.jpg" alt="IMG-PRODUCT" />
                                <Link to="/product-details" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"> View Details</Link>
                            </div>
                            <div className="block2-txt flex-w flex-t p-t-14">
                                <div className="block2-txt-child1 flex-col-l ">
                                    <Link to="/product-details" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> Esprit Ruffle Shirt</Link>
                                    <span className="stext-105 cl3">
                                        $75.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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