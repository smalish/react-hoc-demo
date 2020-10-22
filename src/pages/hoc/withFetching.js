/*
 * @Author: yangying01
 * @Date: 2020-10-22 13:31:42
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 14:52:18
 */
import React, { Component } from 'react';
import {fetchMoviesByType} from './api'
import MovieList from './movieList'

const withFetching = type => WrappedComponent => {
  return class extends Component {
    state = {
      data: {
        movies: [],
      }
    }
    async componentWillMount() {
      const movies = await fetchMoviesByType(type);
      let data = {
        movies: movies
      }
      console.log('movies: ', movies)
      this.setState({
          data
      });
    }
    render(){
      return (
        <WrappedComponent {...this.state.data} {...this.props} />
      )
      
    }

  }
}

export default withFetching;