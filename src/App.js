import './styles/App.scss';

// ### Libs ###
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ### COMPONENTS ###
import Header from './components/Header';

// ### ROUTES ###
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
