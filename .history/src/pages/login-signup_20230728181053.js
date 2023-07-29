import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
function LoginSignup() {
  return (
    <div className="App">
      <Header />
      <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <h2 className="ltext-105 cl0 txt-center">
        Sign Up
        </h2>
      </section>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h3 class="text-center">Sign Up</h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="username">Mobile No.</label>
                    <input type="text" class="form-control" id="username" placeholder="Enter your Mobile No." required />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required />
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                  </div>
                  
								<Link to="/my-account" className="btn btn-primary btn-block"> Sign Up</Link>
                </form>
              </div>
              <div class="card-footer text-center">
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
