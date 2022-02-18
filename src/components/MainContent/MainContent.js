import Header from './NavBar/Header';
import ShowCase from './Showcase';
import WorkSection from './WorkSection';
import './MainContent.css';
const MainContent = () => {
	return (
		<main className="main">
			<Header />
			<ShowCase />
			<WorkSection />
		</main>
	);
};

export default MainContent;
