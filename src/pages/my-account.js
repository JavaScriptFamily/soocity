import Header from '../layout/header';
import Footer from '../layout/footer';
function MyAccount() {
  const data = { show: true, pageName: 'My Account' };

  return (
      <div className="App">
        <Header data={data} />  
          <p>My Account</p>        
        <Footer />       
      </div>
  );
}

export default MyAccount;
