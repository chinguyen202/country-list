import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import { CountryProvider } from './contexts/CountryContext';

function App() {
  return (
    <CountryProvider>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:name">
          <Country />
        </Route>
      </Router>
    </CountryProvider>
  );
}

export default App;
