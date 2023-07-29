import Header from './layout/header';
import Footer from './layout/footer';
import Slider from './layout/slider';
import Banner from './layout/banner';
import ProductHomePage from './layout/product-home-page';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
