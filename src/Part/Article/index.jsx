import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Title from '../../Title';
import './index.scss'


const Article =({background,color,title,line,list,img,btn,showBtn,showImg})=> {

  return (
    <div className="sc-article" style={{background:`${background}`, color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        <div className="m-wrap">
          {list.map((item,i)=>
            <p key={i}>{item}</p>
          )}
        </div>
        
        {showImg &&
        <div className="m-img">
          <img src={img} />
        </div>}
      </div>
      {showBtn &&
      <div className="m-ft">
        <a className="btn01" href={btn.url}>{btn.name}</a>
      </div>}
    </div>
  )
}


Article.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
  /** 图片链接*/
  img: PropTypes.string,
  /** 按钮信息*/
  btn: PropTypes.object,
  /** 是否显示按钮 */
  showBtn: PropTypes.bool,
  /** 是否显示图片 */
  showImg: PropTypes.bool,
};

Article.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: [],
  img: '',
  btn: {},
  showBtn: true,
  showImg: true,
};


export default Article
