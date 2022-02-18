import { FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

import logo1 from '../img/logo-01.jpg';

import './SideNav.css';
const SideNav = () => {
	// const styles = {
	// 	size: 'calc(1rem + 0.6667vw)',
	// 	color: 'white',
	// 	paddingBottom: 'calc(1rem + 0.67vw)',
	// 	transition: 'color 0.3s ease-in-out',
	// 	'&:hover': {
	// 		color: '##ff9408',
	// 	},
	// };
	return (
		<IconContext.Provider
			value={{ className: 'side-nav__content--social__icon' }}
		>
			<aside className="side-nav">
				<div className="side-nav__content">
					<div className="side-nav__content-logo">
						<img src={logo1} alt="logo"></img>
					</div>
					<ul className="side-nav__content--social">
						<a href="#">
							<FaFacebookSquare />
						</a>
						<a href="#">
							<FaTwitter />
						</a>
						<a href="#">
							<FaLinkedin />
						</a>
						<a href="#">
							<FaInstagram />
						</a>
						<a href="#">
							<FaDribbble />
						</a>
						<a href="#">
							<FaPinterest />
						</a>
					</ul>
				</div>
			</aside>
		</IconContext.Provider>
	);
};

export default SideNav;
