import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import PokemonApp from './PokemonApp/PokemonApp';

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome to secret sharer</h1>
        {
          this.state.loggedIn === true ?
          <PokemonApp username = {this.state.username}/>
          :
          <LoginForm handleLogin = {this.handleLogin}/>
        }
      </div>
    );
  }
}

export default App;
