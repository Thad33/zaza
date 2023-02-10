import Navbar from './components/Navbar';
import Destinations from './components/Destinations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Destinations />
      </div>
    </div>
  );
}

export default App;
