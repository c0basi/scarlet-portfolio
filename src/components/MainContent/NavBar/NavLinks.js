const NavLinks = (props) => {
	const closeMobileNavHandler = () => {
		props.isMobile && props.closeMobileMenu();
	};
	return (
		<ul className="header__main-nav--links">
			<li onClick={closeMobileNavHandler}>
				<a href="#">Home</a>
			</li>
			<li onClick={closeMobileNavHandler}>
				<a href="#">About</a>
			</li>
			<li onClick={closeMobileNavHandler}>
				<a href="#">Content</a>
			</li>
			<li onClick={closeMobileNavHandler}>
				<a href="#">References</a>
			</li>
			<li onClick={closeMobileNavHandler}>
				<a href="#">Dates</a>
			</li>
			<li onClick={closeMobileNavHandler}>
				<a href="#">Contact Me</a>
			</li>
		</ul>
	);
};

export default NavLinks;
