import React from 'react';
import PropTypes from 'prop-types'
import Title from '../../Title';
import './index.scss'


const List12 =({background,color,title,line,des,cnt_g1,cnt_g2,cnt_g3,hr})=> {
  return (
    <div className="sc-list12" style={{background:`${background}`,color:`${color}`}}>
      <Title title={des} line={line} />
      <div className='m-item'>
        <div className='m-title'>{title}</div>
        <div className='m-cnt-g1'>{cnt_g1}</div>
        <div className='m-cnt-g2'>{cnt_g2}</div>
        <div className={hr? "hr":""}></div>
        <div className='m-cnt-g3'>{cnt_g3}</div>
      </div>
    </div>
  )
}

List12.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题 */
  title: PropTypes.string,
  /** 标题是否显示线段 */
  line: PropTypes.bool,
  /** 分割线是否显示 */
  hr: PropTypes.bool,
  /** 卡片介绍 */
  des: PropTypes.string,
  /** 内容字段1 */
  cnt_g1: PropTypes.string,
  /** 内容字段2 */
  cnt_g2: PropTypes.string,
  /** 内容字段3*/
  cnt_g3: PropTypes.string,
}

List12.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line: true,
  hr: true,
  des: '',
  cnt_g1: '',
  cnt_g2: '',
  cnt_g3: '',
}

export default List12