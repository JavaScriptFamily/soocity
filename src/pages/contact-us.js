import Header from '../layout/header';
import Footer from '../layout/footer';
import './css/contact-us.css'; // Import CSS file

function ContactUS() {
  return (
    <div className="App">
      <Header />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <h2 className="ltext-105 cl0 txt-center">
          Contact US
        </h2>
      </section>
      <div class="container mt-5">
        <div class="row address-details">
          <div class="col-md-6">
            <div class="contact-container">
              <h2 class="text-center mb-4">Contact Us</h2>
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Name" required />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your Email" required />
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="address">
              The SooCity
            </div>
            <div>
              302 RadheShyam Vihar Phase 5<br></br>
              Muradnagar, Delhi NCR<br></br>
              India
            </div>
            <br></br>
            <div class="address">
              Contact Details
            </div>
            <ul class="list-unstyled">
              <li><strong>Contact No:</strong> +91 9988252428</li>
              <li><strong>Email:</strong> service.soocity@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUS;
