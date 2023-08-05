import Header from '../layout/header';
import Footer from '../layout/footer';
import Slider from '../layout/slider';
import Banner from '../layout/banner';
import ProductHomePage from '../layout/product-home-page';
function Home() {
  const data = {
    show: false,
    pageName: 'John Doe'
  };

  return (
    <div className="App">
      {/* Pending - Hamburger */}
      <Header data={data} />
      {/* Pending */}
      <Slider />
      {/* Completed */}
      <Banner />
      {/* Completed */}
      <ProductHomePage />
      {/* Completed */}
      <Footer />
    </div>
  );
}

export default Home;
