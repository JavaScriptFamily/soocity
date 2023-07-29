import Header from '../layout/header';
import Footer from '../layout/footer';
import Banner from '../layout/banner';
function ContactUS() {
  return (
    <div className="App">
      <Header />
      <section class="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: "url('images/bg-01.jpg')"}}>
        <h2 class="ltext-105 cl0 txt-center">
          Contact
        </h2>
      </section>   
      <Banner />
      <Footer />
    </div>
  );
}

export default ContactUS;
