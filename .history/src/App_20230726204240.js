import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home';
import ProductHomePage from './layout/product-home-page';
import Aboutus from './pages/about-us';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/my-account' Component={ProductHomePage}></Route>
        <Route path='/about-us' Component={Aboutus}></Route>
        {/* <Route path='/my-account' Component={ProductHomePage}></Route>
        <Route path='/my-account' Component={ProductHomePage}></Route>
        <Route path='/my-account' Component={ProductHomePage}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
