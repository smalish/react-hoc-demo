/*
 * @Author: yangying01
 * @Date: 2020-10-22 13:37:54
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 14:45:41
 */
import React, { Component } from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class moveList extends Component {
  render() {
    let {movies} = this.props

    return (
      <div>
        <List renderHeader={() => 'movie'} className="my-list">
        {movies && movies.map((item) => (
          <Item key={item.id} extra={item.name}>名称</Item>
        ))}
        </List>
      </div>
    );
  }
}

export default moveList;