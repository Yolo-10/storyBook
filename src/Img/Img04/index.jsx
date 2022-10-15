import React from 'react';
import PropTypes from 'prop-types'
import Title from '../../Title';
import './index.scss'


const Img04 =({background,color,title,img,cnt,line})=> {
  return (
    <div className="sc-img04" style={{background:`${background}`, color:`${color}`}}>
      <div className="m-img">
            <img src={img} />
      </div>
      <div className="m-bd">
          <div className={line? "m-title line":"m-title"}>
            <span>{title}</span></div>
          <div className='m-cnt'>{cnt}</div>
      </div>
    </div>
  )
}

Img04.propTypes={
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 图片链接 */
  img: PropTypes.string,
  /**  数据内容*/
  cnt: PropTypes.string,
};


Img04.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line: true,
  img:'',
  cnt:'',
};

export default Img04