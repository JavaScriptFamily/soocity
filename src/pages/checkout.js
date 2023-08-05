import Header from '../layout/header';
import Footer from '../layout/footer';
function Checkout() {
  const data = { show: true, pageName: 'Checkout' };
  return (
    <div className="App">
      <Header data={data} />
      <p>Checkout</p>
      <Footer />
    </div>
  );
}

export default Checkout;
