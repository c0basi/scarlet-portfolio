import SideNav from './components/SideNav';
import MainContent from './components/MainContent/MainContent';
import { Fragment } from 'react';
import './App.css';
function App() {
	return (
		<Fragment>
			<SideNav />
			<MainContent />
		</Fragment>
		// <div className="overlay">
		// 	<SideNav />
		// 	<MainContent />
		// </div>
	);
}

export default App;
