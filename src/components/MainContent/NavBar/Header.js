import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import './Header.css';
const Header = () => {
	return (
		<header className="header">
			<MobileNavigation />
			<Navigation />
			{/* <nav className="header__main-nav">
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
			</nav> */}
		</header>
	);
};

export default Header;
