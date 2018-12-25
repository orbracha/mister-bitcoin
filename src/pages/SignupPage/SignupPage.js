import React, { Component } from 'react';
import './SignupPage.scss'
import bitCoinImg from '../../assets/icons/bitcoin.png'
import { inject } from 'mobx-react';
@inject('store')
class SignupPage extends Component {
  state = { user: { name: '', coins: 100, move: [] } }
  setUser = ({ target: { value } }) => {
    var { user } = this.state;
    user.name = value;
    this.setState({
      user
    })
  }

  signUp = (e) => {
    e.preventDefault()
    this.props.store.UserStore.setLogginUser(this.state.user);
    var { history } = this.props;
    history.push('/')
  }
  render() {

    return (
      <div className="signup-page">
        <span role="img">
          <img src={bitCoinImg} alt="name" />
        </span>
        <form onSubmit={this.signUp}>
          <label>
            <span>Please enter your name:</span>
            <input type="text" onChange={this.setUser} />
          </label>
          <button>Sign-up</button>
        </form>
      </div>
    );
  }
}

export default SignupPage;
