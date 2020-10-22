/*
 * @Author: yangying01
 * @Date: 2020-10-15 17:12:11
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 13:35:04
 */
import React, { Component } from 'react';
import { Button, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import ListA from './listA'
import ListB from './listB'

class index extends Component {
  constructor(props){
    super(props)
  
  }

  
  
  render() {
    return (
      <div className="page">
        
        <ListA></ListA> 

        <ListB></ListB>
        
      </div>
    );
  }
}

export default index;