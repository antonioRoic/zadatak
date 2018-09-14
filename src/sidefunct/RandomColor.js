import React from 'react';
import cs from 'classnames';
import '../css/RandomColor.css';


function RandomColor(props) {
  return <div
    className={cs(['center', props.className])}
    style={{ backgroundColor: props.color }}
    onClick={props.onClick}
  >
    {'Click me!'}
  </div>
}


export default RandomColor;