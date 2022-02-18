import Header from './NavBar/Header';
import ShowCase from './Showcase';
import WorkSection from './WorkSection';
import AboutMe from './AboutMe';
import Services from './Services';
import './MainContent.css';
const MainContent = () => {
	return (
		<main className="main">
			<Header />
			<ShowCase />
			<WorkSection />
			<AboutMe />
			<Services />
		</main>
	);
};

export default MainContent;
