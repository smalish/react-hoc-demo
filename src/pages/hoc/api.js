/*
 * @Author: yangying01
 * @Date: 2020-10-22 13:47:00
 * @LastEditors: yangying01
 * @LastEditTime: 2020-10-22 13:51:28
 */
export async function fetchMoviesByType(name){
  if(name == 'science-fiction'){
    return [{
      id: 0,
      name: '机械公敌',
    }]
  }else if(name == 'action'){
    return [{
      id: 0,
      name: '天下无贼',
    },{
      id: 1,
      name: '龙门飞甲',
    },{
      id: 2,
      name: '当幸福来敲门',
    },]
  }
}