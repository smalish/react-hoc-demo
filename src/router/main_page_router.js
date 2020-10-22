/*
 * @Author: yangying01
 * @Date: 2020-09-28 18:58:30
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 13:30:04
 * @Descripttion: 
 * @version: 1.0.0
 */
import Index from '../pages/hoc/index'

const  MainRouterList = [
  {
    path: '/hoc', 
    component: Index, //() => import( /* webpackChunkName: "index" */ '../pages/index/index') ,
    meta:{
      title:'hoc基础使用方式'
    },
   },

] 
MainRouterList.map((item, index) => {
  var meta = Object.assign({auth: true},item.meta)
  return Object.assign(item,{meta})
})
export default MainRouterList;