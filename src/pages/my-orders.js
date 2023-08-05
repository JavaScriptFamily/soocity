import Header from '../layout/header';
import Footer from '../layout/footer';
function MyOrders() {
  const data = { show: true, pageName: 'My Account' };
  return (
    <div className="App">
      <Header data={data} />
      <p>MyOrders</p>
      <Footer />
    </div>
  );
}

export default MyOrders;
