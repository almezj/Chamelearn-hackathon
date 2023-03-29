import './App.css';
import Navbar from './components/Navbar.js';
import Activities from './components/Activities.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App bg-gradient-to-r from-secondary-green to-primary-green">
		<Navbar/>
		<Activities />
		<Footer />
    </div>
  );
}

export default App;
