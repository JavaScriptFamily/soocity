import Header from './layout/header';
import Footer from './layout/footer';
import Slider from './layout/slider';
import Banner from './layout/banner';
import ProductHomePage from './layout/product-home-page';
function App() {
  return (
    <div className="App">
      {/* Pending - Hamburger */}
      <Header />	    
         
        <Slider /> 
        <Banner />  <ProductHomePage />
      <Footer />       
    </div>
  );
}

export default App;
