import Header from '../layout/header';
import Footer from '../layout/footer';
function WomenProductListing() {
  const data = { show: true, pageName: "Women's shoes" };

  return (
    <div className="App">
      <Header data={data} />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center" style={{ color: 'black' }}>
          Coming Soon ...
        </h2>
      </section>
      <Footer />
    </div>
  );
}

export default WomenProductListing;
