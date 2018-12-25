import React, { Component } from 'react';
import './App.scss';
import homeImg from './assets/icons/home.png'
import usersImg from './assets/icons/users.png'
import increaseImg from './assets/icons/increase.png'
import HomePage from './pages/HomePage'
import StatisticPage from './pages/StatisticPage'
import ContactPage from './pages/ContactPage'
import ContactDetails from './pages/ContactDetails'
import ContactEdit from './pages/ContactEdit'
import SignupPage from './pages/SignupPage'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

import { inject, observer } from 'mobx-react';

const PrivetRoute = (props) => {
  return props.isUserLoggedIn ? <Route {...props} /> : <Redirect to={'/signup'} />
}
@inject('store')
@observer
class App extends Component {
  store = this.props.store.UserStore;

  isUserLoggedIn() {
    if (this.store.logginUser) return true;
    return false;
  }
  render() {
    return (
      <Router>
        <div className="app">
          {this.store.logginUser && <nav className="nav-bar">
            <ul>
              <NavLink exact to="/">
                <li>
                  <img src={homeImg} alt="home" />
                </li>
              </NavLink>
              <NavLink exact to="/contact">
                <li>
                  <img src={usersImg} alt="users" />
                </li>
              </NavLink>
              <NavLink exact to="/statistic">
                <li>
                <img src={increaseImg} alt="increase" />
                </li>
              </NavLink>
            </ul>
            <hr />
          </nav>}
          <Switch>
            <PrivetRoute isUserLoggedIn={this.isUserLoggedIn()} path="/" exact component={HomePage} />
            <PrivetRoute isUserLoggedIn={this.isUserLoggedIn()} path="/contact/contact-details/:id" component={ContactDetails} />
            <PrivetRoute isUserLoggedIn={this.isUserLoggedIn()} path="/contact/contact-edit/:id?" component={ContactEdit} />
            <PrivetRoute isUserLoggedIn={this.isUserLoggedIn()} path="/contact" component={ContactPage} />
            <PrivetRoute isUserLoggedIn={this.isUserLoggedIn()} path="/statistic" component={StatisticPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
