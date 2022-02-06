// import { Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Beers from './pages/Beers';
import { Routes, Route } from 'react-router-dom'
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>

      <Route path="/" element={<Home/>}/>
     

      <Route path="/beers" element={<Beers />}/>
      
      <Route path="/beers/:id" element={<BeerDetails/>}/>

      <Route path="/random-beer" element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
