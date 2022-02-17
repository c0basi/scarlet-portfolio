import SideNav from './components/SideNav';
import MainContent from './components/MainContent/MainContent';
import './App.css';
function App() {
	return (
		<div className="overlay">
			<SideNav />
			<MainContent />
		</div>
	);
}

export default App;
