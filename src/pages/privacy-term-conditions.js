import Header from '../layout/header';
import Footer from '../layout/footer';
function PrivacyTermConditions() {
  const data = { show: true, pageName: 'Privacy Term Conditions' };
  return (
      <div className="App">
        <Header data={data} />  
          <p>PrivacyTermConditions</p>        
        <Footer />       
      </div>
  );
}

export default PrivacyTermConditions;
