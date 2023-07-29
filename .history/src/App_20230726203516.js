import Header from './layout/header';
import Footer from './layout/footer';
import Slider from './layout/slider';
import Banner from './layout/banner';
import ProductHomePage from './layout/product-home-page';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/my-account' Component={ProductHomePage}></Route>
        {/* Pending - Hamburger */}
        <Header />	    
          {/* Pending */}
          <Slider /> 
          {/* Completed */}
          <Banner />  
          {/* Completed */}
          <ProductHomePage />
        {/* Completed */}
        <Footer />       
      </div>
    </BrowserRouter>
  );
}

export default App;
