import React, { Component } from 'react';
import Movie from './Movie/Movie.js'
import InputSearchMovie from './InputSearchMovie/InputSearchMovie.js'
import PageHeader from './PageHeader/PageHeader.js'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    current_page: 1,
    query: '',
    pages: [1]
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
      let array = [];
      for (let i = 0; i < response.data.total_pages; i++){
        array.push(i+1);
      }
      this.setState({
        movies: response.data.results.slice(0, 5),
        pages: array,
        page: response.data.page
      })
    });
  }

  changePage = (page) => {
    this.setState({
      current_page: page
    }, () => this.getMovies(null));
  }

  render() {
  let movies = null;
  if (this.state.movies.length !== 0){
    movies =
    (
      <div>
      {this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} overview={movie.overview} key={movie.id} />
      })}
      </div>
    )
  }
  let pages =
  (
    <div className="Paginator">
    {this.state.pages.map((item, index) => {
      return <button onClick={() => this.changePage(item)}>{item}</button>
    } )}
    </div>
  );
    return (
      <div className="App">
      <PageHeader />
      <InputSearchMovie changed={(event) => this.getMovies(event.target.value)} />
      {movies}
      {pages}
      </div>
    );
  }
}

export default App;
