import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
function LoginSignup() {
  return (
    <div className="App">
      <Header />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
      <h2 className="ltext-105 cl0 txt-center">
      Join Now 
        </h2>
      </section>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Join Now</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="username">Mobile No.</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your Mobile No." required />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  </div>
                  <div className="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                  </div>
                  
								<Link to="/my-account" className="btn btn-primary btn-block"> Sign Up</Link>
                </form>
              </div>
              <div className="card-footer text-center">
                <p>Already have an account? <a href="#">Log in here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-img1 txt-center p-lr-15 p-tb-40">
      </section>
      <Footer />
    </div>
  );
}

export default LoginSignup;
