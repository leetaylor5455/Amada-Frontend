import './styles/App.scss';

// ### Libs ###
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// ### COMPONENTS ###
import Header from './components/Header';

// ### ROUTES ###
import Load from './components/Load';
import Home from './components/Home';
import Contact from './components/Contact';
import notFound from './components/404';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/load'/>
          </Route>
          <Route path='/load' component={Load}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/home' component={Home}/>
          <Route path='/process' component={Contact}/>
          <Route component={notFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
