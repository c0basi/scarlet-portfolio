import Header from './NavBar/Header';
import ShowCase from './Showcase';
import WorkSection from './WorkSection';
import AboutMe from './AboutMe';
import './MainContent.css';
const MainContent = () => {
	return (
		<main className="main">
			<Header />
			<ShowCase />
			<WorkSection />
			<AboutMe />
		</main>
	);
};

export default MainContent;
