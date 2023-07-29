import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/about-us';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/my-account' Component={ProductHomePage}></Route>
        <Route path='/about-us' Component={Aboutus}></Route>
        <Route path='/contact-us' Component={ProductHomePage}></Route>
        <Route path='/help-and-faq' Component={ProductHomePage}></Route>
        <Route path='/cart' Component={ProductHomePage}></Route>
        <Route path='/checkout' Component={ProductHomePage}></Route>
        <Route path='/login-signup' Component={ProductHomePage}></Route>
        <Route path='/privacy-and-terms-conditions' Component={ProductHomePage}></Route>
        <Route path='/product-details' Component={ProductHomePage}></Route>
        <Route path='/product-listing' Component={ProductHomePage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
