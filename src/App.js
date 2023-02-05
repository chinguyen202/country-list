import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:name">
          <Country />
        </Route>
      </Router>
    </>
  );
}

export default App;
