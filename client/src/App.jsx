import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Header from './Components/Common/Navbar';
import BackTop from './Components/Common/BackTop';
import Footer from './Components/Common/Footer';
import './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <BackTop />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;