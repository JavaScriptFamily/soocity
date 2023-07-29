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
						<a href="index.html"><img src="Logo Design/White Background/Left Icon Right Font/Soocity Logo.png" alt="SooCity - Men's Shoes" /></a>
					</div>
					{/* Icon header */}
					<div class="wrap-icon-header flex-w flex-r-m m-r-15">
						<div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="0">
							<i class="zmdi zmdi-shopping-cart"></i>
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

			<div class="wrap-header-cart js-panel-cart">
				<div class="s-full js-hide-cart"></div>
				<div class="header-cart flex-col-l p-l-65 p-r-25">
					<div class="header-cart-title flex-w flex-sb-m p-b-8">
						<span class="mtext-103 cl2">
							Your Cart
						</span>
						<div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
							<i class="zmdi zmdi-close"></i>
						</div>
					</div>
					<div class="header-cart-content flex-w js-pscroll">
						<ul class="header-cart-wrapitem w-full">
							<li class="header-cart-item flex-w flex-t m-b-12">
								<div class="header-cart-item-img">
									<img src="images/item-cart-01.jpg" alt="IMG" />
								</div>
								<div class="header-cart-item-txt p-t-8">
									<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
										White Shirt Pleat
									</a>
									<span class="header-cart-item-info">
										1 x $19.00
									</span>
								</div>
							</li>
							<li class="header-cart-item flex-w flex-t m-b-12">
								<div class="header-cart-item-img">
									<img src="images/item-cart-02.jpg" alt="IMG" />
								</div>
								<div class="header-cart-item-txt p-t-8">
									<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
										Converse All Star
									</a>
									<span class="header-cart-item-info">
										1 x $39.00
									</span>
								</div>
							</li>
							<li class="header-cart-item flex-w flex-t m-b-12">
								<div class="header-cart-item-img">
									<img src="images/item-cart-03.jpg" alt="IMG" />
								</div>
								<div class="header-cart-item-txt p-t-8">
									<a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
										Nixon Porter Leather
									</a>
									<span class="header-cart-item-info">
										1 x $17.00
									</span>
								</div>
							</li>
						</ul>
						<div class="w-full">
							<div class="header-cart-total w-full p-tb-40">
								Total: $75.00
							</div>
							<div class="header-cart-buttons flex-w w-full">
								<a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
									View Cart
								</a>
								<a href="shoping-cart.html" class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
									Check Out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;