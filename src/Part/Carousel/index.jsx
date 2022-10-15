import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import Title from '../../Title';
import './index.scss'


const Caro =({background,color,title,line,list})=> {
  return (
      <div className="sc-carousel" style={{background:`${background}`, color:`${color}`}}>
        <Title title={title} line={line} />

        <div className="m-bd">
          <Carousel autoplay style={{"width":"100%"}}>
            {list.map((item,i)=>
              <div key={i}>
                <img src={item.img} />
              </div>
            )}
          </Carousel>

        </div>
      </div>
  )
}

Caro.propTypes = {
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
}

Caro.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: [],
};



export default Caro
