import React from 'react';
import './InputSearchMovie.css'

const input = (props) => {
  return (<div className="InputSearchMovie">
  <input type="text" onChange={props.changed} placeholder="Busque um filme por nome ou gênero..."/>
  </div>)
}

export default input;
