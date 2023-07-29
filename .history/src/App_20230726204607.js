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
        <Route path='/my-account' Component={Aboutus}></Route>
        <Route path='/about-us' Component={Aboutus}></Route>
        <Route path='/contact-us' Component={Aboutus}></Route>
        <Route path='/help-faq' Component={Aboutus}></Route>
        <Route path='/cart' Component={Aboutus}></Route>
        <Route path='/checkout' Component={Aboutus}></Route>
        <Route path='/login-signup' Component={Aboutus}></Route>
        <Route path='/privacy-and-terms-conditions' Component={Aboutus}></Route>
        <Route path='/product-details' Component={Aboutus}></Route>
        <Route path='/product-listing' Component={Aboutus}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
