import Header from '../layout/header';
import Footer from '../layout/footer';
import './css/contact-us.css'; // Import CSS file

function ContactUS() {
  const data = { show: true, pageName: 'Contact US' };
  return (
    <div className="App">
      <Header data={data} />

      <div className="container mt-5">
        <div className="row address-details">
          <div className="col-md-6">
            <div className="contact-container">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="address">
              The SooCity
            </div>
            <div>
              302 RadheShyam Vihar Phase 5<br></br>
              Muradnagar, Delhi NCR<br></br>
              India
            </div>
            <div className="address add-2">
              Contact Details
            </div>
            <ul className="list-unstyled">
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
