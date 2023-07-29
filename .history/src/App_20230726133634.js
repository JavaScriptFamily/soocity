import Header from './layout/header';
import Footer from './layout/footer';
import Slider from './layout/slider';
import Banner from './layout/banner';
function App() {
  return (
    <div className="App">
      <Header />	     
      <Slider />
      <Banner />
      
      {/* Footer */}
      <Footer />
      {/* Back to top */}
      <div class="btn-back-to-top" id="myBtn">
        <span class="symbol-btn-back-to-top">
        <i class="zmdi zmdi-chevron-up"></i>
        </span>
      </div>    
    </div>
  );
}

export default App;
