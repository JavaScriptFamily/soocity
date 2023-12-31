import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
const Header = (props) => {
	const { show, pageName } = props.data;
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const [scrolled, setScrolled] = useState(false);

	// Function to handle scroll event
	const handleScroll = () => {
		if (window.scrollY > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	// Add event listener on mount and remove it on unmount
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<header className={`header ${scrolled ? 'scrolled' : ''}`}>
				<div className="container-menu-desktop header-sec">
					<div className="top-bar">
						<div className="content-topbar flex-sb-m h-full container">
							<div className="left-top-bar">
								Call & What's APP: 9988252428
							</div>
							<div className="right-top-bar flex-w h-full">
								<Link to="/contact-us" className="flex-c-m trans-04 p-lr-25"> Contact US</Link>
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
									<li className="label1" data-label1="Coming Soon">
										<Link to="/women-product-listing"> Women's Shoes</Link>
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
				{isOpen &&
					<div className="menu-mobile">
						<ul className="topbar-mobile">
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
					</div>}
			</header>
			{/* Section - Page Name */}
			{show &&
				<section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
					<h2 className="ltext-105 cl0 txt-center">
						{pageName}
					</h2>
				</section>
			}
		</div>
	);
}

export default Header;