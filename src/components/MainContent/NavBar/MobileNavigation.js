import NavLinks from './NavLinks';
import { useState } from 'react';

import { CgMenuRound, CgCloseO } from 'react-icons/cg';

const MobileNavigation = () => {
	const [open, setOpen] = useState(false);
	const hanburgerIcon = (
		<CgMenuRound
			className="hamburger"
			size="4rem"
			color="white"
			onClick={() => setOpen((prev) => !prev)}
		/>
	);

	const closeIcon = (
		<CgCloseO
			className="hamburger"
			size="4rem"
			color="white"
			onClick={() => setOpen((prev) => !prev)}
		/>
	);
	const closeMobileMenu = () => setOpen(false);
	return (
		<nav className="mobile-navigation">
			{open ? closeIcon : hanburgerIcon}
			{open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
		</nav>
	);
};
export default MobileNavigation;
