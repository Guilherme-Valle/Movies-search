import React from 'react';

const input = (props) => {
  return (<div className="InputSearchMovie">
  <input type="text" onChange={props.changed}/>
  </div>)
}

export default input;
