import Header from '../layout/header';
import Footer from '../layout/footer';
function PageNotFound() {
  const data = { show: true, pageName: 'My Account' };
  return (
    <div className="App">
      <Header data={data} />
      <p>PageNotFound</p>
      <Footer />
    </div>
  );
}

export default PageNotFound;
