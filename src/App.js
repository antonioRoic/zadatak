import React, { Component } from 'react';
import logo from './logo.svg';
import TextInput from './sidefunct/TextInput';
import RandomColor from './sidefunct/RandomColor';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      text: '', 
      colorOne: '',
      colorTwo: '',
      color: 'black',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var url = 'http://www.colr.org/json/color/random';

    this.fetchColors(url, 'colorOne');
    this.fetchColors(url, 'colorTwo');
  }

  fetchColors(url, colorName) {
    fetch(url)
      .then(response => response.json())
      .then(json => {
          this.setState({ [colorName]: '#'+json.new_color });
        }
    );
  }

  onChangeColor() {
    var i = Math.floor((Math.random() * 2) + 1);
    if (this.state.color === 'black') {
      if (i===1) this.setState((previous) => ({ color: previous.colorOne }));
      else if (i===2) this.setState((previous) => ({ color: previous.colorTwo }));
    }
    else this.setState({ color: 'black' });
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RandomColor 
         onClick={this.onChangeColor} 
         color={this.state.color}
        />
        <div>
          <p className="App-intro">
          {this.state.text}
          </p>
          <TextInput
            type='text'
            name='text'
            onChange={this.handleChange}
            placeholder='Write something!'
            value={this.state.text}
          />
        </div>
      </div>
    );
  }
}

export default App;
