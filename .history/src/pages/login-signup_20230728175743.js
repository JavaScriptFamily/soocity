import Header from '../layout/header';
import Footer from '../layout/footer';
function LoginSignup() {
  return (
      <div className="App">
        <Header />  
        <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
        <h2 className="ltext-105 cl0 txt-center">
          Men's Shoes
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
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username" required />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" required />
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
            </form>
          </div>
          <div class="card-footer text-center">
            <p>Already have an account? <a href="#">Log in here</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>    

  <section className="bg-img1 txt-center p-lr-15 p-tb-92">
        <h2 className="ltext-105 cl0 txt-center">
          Men's Shoes
        </h2>
      </section>    
        <Footer />       
      </div>
  );
}

export default LoginSignup;
