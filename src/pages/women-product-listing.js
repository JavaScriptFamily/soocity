import Header from '../layout/header';
import Footer from '../layout/footer';
function WomenProductListing() {
  return (
    <div className="App">
      <Header />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <h2 className="ltext-105 cl0 txt-center">
          Women's Shoes
        </h2>
      </section>
      
      <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center" style={{color: 'black'}}>
            Coming Soon ...
        </h2>
      </section>
      <Footer />
    </div>
  );
}

export default WomenProductListing;
