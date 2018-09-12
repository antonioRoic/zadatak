import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cs from 'classnames';
import './TextInput.css';
import './RandomColor.css';


function TextInput(props) {
  return <input
    className={cs(['input', props.className])}
    type={props.type}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
}


function RandomColor(props) {
  return <div
    className={cs(['center', props.className])}
    style={{backgroundColor: props.color}}
    onClick={props.onClick}
  >
    {'Klick me!'}
  </div>
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
    text: '', 
    colors: [],
    color: 'black',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
  }
  

  componentDidMount() {
    var url = 'http://www.colr.org/json/color/random';
    var colorOne =
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        return console.log(json);
      });
    var colorTwo = 
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return console.log(json);
    });
    var data = [colorOne, colorTwo];
    var colorss = data.map(function(color) {
      return `#${color.hex}`;
    });
    this.setState({ colors: colorss });
}


  onChangeColor() {
    var i = Math.floor(Math.random() * this.state.colors.length);
    if(this.state.color === 'black')
    this.setState(
    { color: this.state.colors[i] }
    );
    else    
       this.setState(
         { color: 'black' });
  }


  handleChange(event) {
    this.setState({text: event.target.value});
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
        <p className="App-intro">
        {this.state.text}
        </p>
        <TextInput
          type={'text'}
          name='text'
          onChange={this.handleChange}
          placeholder={'Write something!'}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default App;
