import React from 'react';
import './Movie.css'

const movie = (props) => {
  return (<div className="Movie">
  <header>
  <h3>{props.title}</h3>
  </header>
  <content>
<p>{props.overview}</p>
  </content>
  </div>)
}

export default movie;
