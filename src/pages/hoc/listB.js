/*
 * @Author: yangying01
 * @Date: 2020-10-22 13:31:50
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 15:12:53
 */

// import React, { Component } from 'react';
// import {List, Badge, WhiteSpace} from 'antd-mobile';
// import {fetchMoviesByType} from './api'
// import MovieList from './movieList'

// class PageB extends React.Component {
//   state = {
//       movies: [],
//   }

//   // ...
//   async componentWillMount() {
//       const movies = await fetchMoviesByType('action');
//       this.setState({
//           movies,

//       });
//   }
//   render() {
//       return (
//         <>
//           <MovieList movies={this.state.movies} />

//           <WhiteSpace />
//           <List renderHeader={() => 'other'}>
//             <List.Item>
//               Marketing:
//               <Badge text="减" hot style={{ marginLeft: 12 }} />
//               <Badge text="惠" hot style={{ marginLeft: 12 }} />
//               <Badge text="免" hot style={{ marginLeft: 12 }} />
//               <Badge text="反" hot style={{ marginLeft: 12 }} />
//               <Badge text="HOT" hot style={{ marginLeft: 12 }} />
//             </List.Item>
//           </List>
          

//         </>
      
//       )
//   }
// }

// export default PageB;

// 当页面还有其他内容时，如何用高阶函数封装
import React, { Component } from 'react';
import {List, Badge, WhiteSpace} from 'antd-mobile';
import withFetching from './withFetching'
import {fetchMoviesByType} from './api'
import MovieList from './movieList'

class PageB extends React.Component {
  render() {
    const { movies } = this.props
    console.log(this.props)
      return (
        <>
          <MovieList movies={movies} />

          <WhiteSpace />
          <List renderHeader={() => 'other'}>
            <List.Item>
              Marketing:
              <Badge text="减" hot style={{ marginLeft: 12 }} />
              <Badge text="惠" hot style={{ marginLeft: 12 }} />
              <Badge text="免" hot style={{ marginLeft: 12 }} />
              <Badge text="反" hot style={{ marginLeft: 12 }} />
              <Badge text="HOT" hot style={{ marginLeft: 12 }} />
            </List.Item>
          </List>
          

        </>
      
      )
  }
}

export default withFetching('action')(PageB);


