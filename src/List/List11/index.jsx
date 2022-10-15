import React from 'react';
import Title from '../../Title';
import PropTypes from 'prop-types';
import './index.scss'


const List11 =({background,color,title,line,round,bottom,list})=> {
  return (
    <div className="sc-list11"  style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      {list.map((item,i) =>
          <div className="m-item" key={i}>
            <div className="m-hd">
              <span>{item?.title}</span>
              <label className={round? "round":""}>{item?.label}</label>
            </div>
            <div><div></div><spans className={bottom? "bottom":""}>{item?.cnt}</spans></div>
          </div>
      )}
    </div>
  )
}

List11.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** label边框是否圆角 */
  round: PropTypes.bool,
  /** 内容字段下划线样式 */
  bottom: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
};

List11.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  round:true,
  bottom:true,
  list: []
};


export default List11