import { Link } from 'react-router-dom';
function Footer() {
	return (
		<footer className="bg3 p-t-75 p-b-32">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-lg-3 p-b-50">
						<h4 className="stext-301 cl0 p-b-30">
							Categories
						</h4>
						<ul>
							<li className="p-b-10">
								<Link to="/product-listing" className="stext-107 cl7 hov-cl1 trans-04"> All Shoes</Link>
							</li>
							<li className="p-b-10">
								<Link to="/cart" className="stext-107 cl7 hov-cl1 trans-04"> Cart</Link>
							</li>
						</ul>
					</div>
					<div className="col-sm-6 col-lg-3 p-b-50">
						<h4 className="stext-301 cl0 p-b-30">
							Help
						</h4>
						<ul>
							<li className="p-b-10">
								<Link to="/about-us" className="stext-107 cl7 hov-cl1 trans-04"> About US</Link>
							</li>
							<li className="p-b-10">
								<Link to="/contact-us" className="stext-107 cl7 hov-cl1 trans-04"> Contact US</Link>
							</li>
							<li className="p-b-10">
								<Link to="/help-faq" className="stext-107 cl7 hov-cl1 trans-04"> Help & FAQs</Link>
							</li>
						</ul>
					</div>
					<div className="col-sm-6 col-lg-3 p-b-50">
						<h4 className="stext-301 cl0 p-b-30">
							GET IN TOUCH
						</h4>
						<p className="stext-107 cl7 size-201">
							Any questions? Let us know in store at Radhesyam Vihar Phase 5, Muradnagar, Ghaziabad, UP. Pin Code: 201206, What's APP No. 9988252428.
						</p>						
					</div>
					<div className="col-sm-6 col-lg-3 p-b-50">
						<h4 className="stext-301 cl0 p-b-30">
							Join What's APP Group for latest shoes
						</h4>
						<form>
							<div className="wrap-input1 w-full p-b-4">
								<input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="9988252428" />
								<div className="focus-input1 trans-04"></div>
							</div>
							<div className="p-t-18">
								<button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>				
			</div>
		</footer>
	);
}

export default Footer;