import React, { Component } from 'react';
import About from './about';
import Header from './header';
import Footer from './footer'
import { TEAMS } from '../shared/teams';
import Home from './home';
import Contact from './contact';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: TEAMS

    };
  }
  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/about' render={() => <About teams={this.state.teams} />} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;