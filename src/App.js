import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import ItemDetail from './components/itemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop} exact={true} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
