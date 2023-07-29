import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';
function Header() {
	const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

	return (
		<div>
			<header>
				<div className="container-menu-desktop">
					<div className="top-bar">
						<div className="content-topbar flex-sb-m h-full container">
							<div className="left-top-bar">
								Call & What's APP: 9988252428
							</div>
							<div className="right-top-bar flex-w h-full">
								<Link to="/help-faq" className="flex-c-m trans-04 p-lr-25"> Help & FAQs</Link>
								<Link to="/login-signup" className="flex-c-m trans-04 p-lr-25"> My Account</Link>
							</div>
						</div>
					</div>
					<div className="wrap-menu-desktop">
						<nav className="limiter-menu-desktop container">
							<Link to="/" className="logo">
								<img src="Logo Design/Black Background/Left Icon Right Font/Soocity Logo.png" alt="SooCity - Men's Shoes" />
							</Link>

							<div className="menu-desktop">
								<ul className="main-menu">
									<li>
										<Link to="/"> Home</Link>
									</li>
									<li className="label1" data-label1="hot">
										<Link to="/product-listing"> Men's Shoes</Link>
									</li>
									<li>
										<Link to="/about-us"> About Us</Link>
									</li>
									<li>
										<Link to="/contact-us"> Contact Us</Link>
									</li>
								</ul>
							</div>
							{/* Icon header */}
							<div className="wrap-icon-header flex-w flex-r-m">
								<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="0">
									<i className="zmdi zmdi-shopping-cart"></i>
								</div>
							</div>
						</nav>
					</div>
				</div>
				{/* Header Mobile */}
				<div className="wrap-header-mobile">
					{/* Logo moblie */}
					<div className="logo-mobile">
					<Link to="/"> <img src="Logo Design/White Background/Left Icon Right Font/Soocity Logo.png" alt="SooCity - Men's Shoes" /></Link>
					</div>
					{/* Icon header */}
					<div className="wrap-icon-header flex-w flex-r-m m-r-15">
						<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="0">
						<Link to="/cart"><i className="zmdi zmdi-shopping-cart"></i></Link>
						</div>
					</div>
					{/* Button show menu */}
					<div className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</div>
				</div>
				{/* Menu Mobile */}
				<div className="">
					<ul className="">
						<li>
							<div className="left-top-bar">
								What's APP: 9988252428
							</div>
						</li>
						<li>
							<div className="right-top-bar flex-w h-full">
								<Link to="/help-faq" className="flex-c-m p-lr-10 trans-04"> Help & FAQs</Link>
								<Link to="/login-signup" className="flex-c-m p-lr-10 trans-04"> My Account</Link>
							</div>
						</li>
					</ul>
					<ul className="main-menu-m">
						<li>
							<Link to="/"> Home</Link>
						</li>
						<li>
							<Link to="/product-listing"> Men's Shoes</Link>
						</li>
						<li>
							<Link to="/about-us"> About Us</Link>
						</li>
						<li>
							<Link to="/contact-us"> Contact Us</Link>
						</li>
					</ul>
				</div>
			</header>
		</div>
	);
}

export default Header;