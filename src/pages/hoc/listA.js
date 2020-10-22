/*
 * @Author: yangying01
 * @Date: 2020-10-22 13:31:42
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 14:48:32
 */

// import React, { Component } from 'react';
// import {fetchMoviesByType} from './api'
// import MovieList from './movieList'

// class PageA extends React.Component {
//   state = {
//       movies: [],
//   }
//   // ...

//   async componentWillMount() {
//       const movies = await fetchMoviesByType('science-fiction');
//       this.setState({
//           movies,
//       });
//   }

//   render() {
//       return <MovieList movies={this.state.movies} />
//   }
// }
// export default PageA;

// --------------------------------------------------------------------

import withFetching from './withFetching'
import MovieList from './movieList'

export default withFetching('science-fiction')(MovieList)