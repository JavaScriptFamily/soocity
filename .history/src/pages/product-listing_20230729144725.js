import Header from '../layout/header';
import Footer from '../layout/footer';
// import Banner from '../layout/banner';
function ProductListing() {
  return (
    <div className="App">
      <Header />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <h2 className="ltext-105 cl0 txt-center">
          Men's Shoes
        </h2>
      </section>
      <div class="bg0 m-t-23 p-b-140">
        <div class="container">
          <div class="flex-w flex-sb-m p-b-52">
            <div class="flex-w flex-l-m filter-tope-group m-tb-10">
              <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                All Products
              </button>

              <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                Men
              </button>

              <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                Women
              </button>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListing;
