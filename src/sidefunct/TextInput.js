import React from 'react';
import cs from 'classnames';
import '../css/TextInput.css';


function TextInput(props) {
  return <input
    className={cs(['input', props.className])}
    type={props.type}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
}


export default TextInput;