import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'


const Img05 =({background,color,line,title,img1,img2,bg,label,cnt})=> {
  return (
    <div className="sc-img05" style={{background:`${background}`,color:`${color}`}}>
      <Title title={title} line={line} />
     {img1 &&
        <div className="m-img">
          <img src={img1} />
          <div></div>
        </div>}

      {img2 &&
        <div className="m-img">
          <div></div>
          <img src={img2} />
        </div>}
        
      <div>
        {label &&
          <label style={{background:`${bg}`}}> {label}</label>
        }</div>
      <div className='m-cnt'>{cnt}</div>
    </div>
  )
}

Img05.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 标题 */
  title: PropTypes.string,
  /** 标签的显示模式 */
  label: PropTypes.string,
  /** 数据内容 */
  cnt: PropTypes.string, 
  /** 图片链接1 */
  img1:PropTypes.string,
  /** 图片链接2 */
  img2:PropTypes.string,
  /** label背景 */
  bg:PropTypes.string,
}

Img05.defaultProps = {
  background:'#fff',
  color:'#333',
  line:true,
  title:'XXXX',
  label:'',
  cnt:'',
  img1:'',
  img2:'',
  bg:'#e6e4e4',
}

export default Img05