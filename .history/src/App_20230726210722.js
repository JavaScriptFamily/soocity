import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/about-us';
import Cart from './pages/cart';
import ContactUS from './pages/contact-us';
import Faq from './pages/faq';
import Checkout from './pages/checkout';
import PrivacyTermConditions from './pages/privacy-term-conditions';
import ProductDetails from './pages/product-details';
import ProductListing from './pages/product-listing';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/my-account' Component={Aboutus}></Route>
        <Route path='/about-us' Component={Aboutus}></Route>
        <Route path='/contact-us' Component={ContactUS}></Route>
        <Route path='/help-faq' Component={Faq}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/checkout' Component={Checkout}></Route>
        <Route path='/login-signup' Component={LoginSignup}></Route>
        <Route path='/privacy-and-terms-conditions' Component={PrivacyTermConditions}></Route>
        <Route path='/product-details' Component={ProductDetails}></Route>
        <Route path='/product-listing' Component={ProductListing}></Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
