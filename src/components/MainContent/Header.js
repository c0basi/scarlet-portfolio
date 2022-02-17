import './Header.css';
const Header = () => {
	return (
		<header className="header">
			<nav className="header__main-nav">
				<div className="header__main-nav--hamburger">
					<div className="line line 1"></div>
					<div className="line line 2"></div>
					<div className="line line 3"></div>
				</div>
				<ul className="header__main-nav--links">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Content</a>
					</li>
					<li>
						<a href="#">References</a>
					</li>
					<li>
						<a href="#">Dates</a>
					</li>
					<li>
						<a href="#">Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
