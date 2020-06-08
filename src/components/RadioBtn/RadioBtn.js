import React from 'react';

export default function RadioBtn(props) {

  return(
    <label className="entry-radio-label">
      <input 
        type="radio" 
        className="mood-radio"
        name={props.name} 
        value={props.text} 
        onChange={(e)=>props.setValue(e.target.value)} 
      />
      {props.text}
    </label>
  );
}
