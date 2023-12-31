import Header from '../layout/header';
import Footer from '../layout/footer';
import Banner from '../layout/banner';
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

          <div class="row isotope-grid">
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-01.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Esprit Ruffle Shirt
                    </a>

                    <span class="stext-105 cl3">
                      $16.64
                    </span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                      <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                      <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-02.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Herschel supply
                    </a>

                    <span class="stext-105 cl3">
                      $35.31
                    </span>
                  </div>

                  <div class="block2-txt-child2 flex-r p-t-3">
                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                      <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                      <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-03.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Only Check Trouser
                    </a>

                    <span class="stext-105 cl3">
                      $25.50
                    </span>
                  </div>


                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-04.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Classic Trench Coat
                    </a>

                    <span class="stext-105 cl3">
                      $75.00
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-05.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Front Pocket Jumper
                    </a>

                    <span class="stext-105 cl3">
                      $34.75
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-06.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Vintage Inspired Classic
                    </a>

                    <span class="stext-105 cl3">
                      $93.20
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-07.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Shirt in Stretch Cotton
                    </a>

                    <span class="stext-105 cl3">
                      $52.66
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-08.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Pieces Metallic Printed
                    </a>

                    <span class="stext-105 cl3">
                      $18.96
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-09.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Converse All Star Hi Plimsolls
                    </a>

                    <span class="stext-105 cl3">
                      $75.00
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-10.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Femme T-Shirt In Stripe
                    </a>

                    <span class="stext-105 cl3">
                      $25.85
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-11.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Herschel supply
                    </a>

                    <span class="stext-105 cl3">
                      $63.16
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-12.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      Herschel supply
                    </a>

                    <span class="stext-105 cl3">
                      $63.15
                    </span>
                  </div>


                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* Block2 */}
              <div class="block2">
                <div class="block2-pic hov-img0">
                  <img src="images/product-13.jpg" alt="IMG-PRODUCT" />

                  <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                    Quick View
                  </a>
                </div>

                <div class="block2-txt flex-w flex-t p-t-14">
                  <div class="block2-txt-child1 flex-col-l ">
                    <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                      T-Shirt with Sleeve
                    </a>

                    <span class="stext-105 cl3">
                      $18.49
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
