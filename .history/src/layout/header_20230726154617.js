import { Link } from 'react-router-dom';
function Header() {
	return (
		<div>
			<header>
				<div class="container-menu-desktop">
					<div class="top-bar">
						<div class="content-topbar flex-sb-m h-full container">
							<div class="left-top-bar">
								Call & What's APP: 9988252428
							</div>
							<div class="right-top-bar flex-w h-full">
								<Link to="/help-faq" class="flex-c-m trans-04 p-lr-25"> Help & FAQs</Link>
								<Link to="/my-account" class="flex-c-m trans-04 p-lr-25"> My Account</Link>
							</div>
						</div>
					</div>
					<div class="wrap-menu-desktop">
						<nav class="limiter-menu-desktop container">
							<Link to="/" class="logo">
								<img src="Logo Design/White Background/Left Icon Right Font/Soocity Logo.png" alt="SooCity - Men's Shoes" />
							</Link>

							<div class="menu-desktop">
								<ul class="main-menu">
									<li>
										<Link to="/"> Home</Link>
									</li>
									<li class="label1" data-label1="hot">
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
							<div class="wrap-icon-header flex-w flex-r-m">
								<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="0">
									<i class="zmdi zmdi-shopping-cart"></i>
								</div>
							</div>
						</nav>
					</div>
				</div>
				{/* Header Mobile */}
				<div class="wrap-header-mobile">
					{/* Logo moblie */}
					<div class="logo-mobile">
					<Link to="/"> <img src="Logo Design/White Background/Left Icon Right Font/Soocity Logo.png" alt="SooCity - Men's Shoes" /></Link>
					</div>
					{/* Icon header */}
					<div class="wrap-icon-header flex-w flex-r-m m-r-15">
						<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="0">
						<Link to="/cart"><i class="zmdi zmdi-shopping-cart"></i></Link>
						</div>
					</div>
					{/* Button show menu */}
					<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</div>
				</div>
				{/* Menu Mobile */}
				<div class="menu-mobile">
					<ul class="topbar-mobile">
						<li>
							<div class="left-top-bar">
								What's APP: 9988252428
							</div>
						</li>
						<li>
							<div class="right-top-bar flex-w h-full">
								<Link to="/help-faq" class="flex-c-m p-lr-10 trans-04"> Help & FAQs</Link>
								<Link to="/my-account" class="flex-c-m p-lr-10 trans-04"> My Account</Link>
							</div>
						</li>
					</ul>
					<ul class="main-menu-m">
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