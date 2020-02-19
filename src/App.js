import React, { Component } from 'react';
import Movie from './Movie/Movie.js'
import InputSearchMovie from './InputSearchMovie/InputSearchMovie.js'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    current_page: 1,
    query: '',
    total_pages: 1
  }

  /**
   Consulta a api
  */
  getMovies = (query) => {
    if (query !== null){
      this.setState({
        query: query
      });
    } else {
      query = this.state.query;
    }
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=2e38f6e1af4ed10e12511768255b9cff&language=pt-BR&query="
     + query + "&page=" + this.state.current_page)
    .then(response => {
      console.log(response.data);
      this.setState({
        movies: response.data.results,
        total_pages: response.data.total_pages
      })
    });
  }

  render() {
  let movies = null;
  if (this.state.movies.length !== 0){
    movies =
    (
      <div>
      {this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} key={movie.id} />
      })}
      </div>
    )
  }
    return (
      <div className="App">
      <InputSearchMovie changed={(event) => this.getMovies(event.target.value)} />
      {movies}
      </div>
    );
  }
}

export default App;
