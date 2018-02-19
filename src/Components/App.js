import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard/Dashboard';
import Wizard1 from './Wizard/Wizard1';
import Wizard2 from './Wizard/Wizard2';
import Wizard3 from './Wizard/Wizard3';
import Wizard4 from './Wizard/Wizard4'
import Wizard5 from './Wizard/Wizard5';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/wizard/1' component={Wizard1} />
            <Route path='/wizard/2' component={Wizard2} />
            <Route path='/wizard/3' component={Wizard3} />
            <Route path='/wizard/4' component={Wizard4} />
            <Route path='/wizard/5' component={Wizard5} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
