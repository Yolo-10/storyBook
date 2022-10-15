import { presetPalettes,generate} from '@ant-design/colors';
import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Title';
import './index.scss'
 

const Img06 =({background,color,title,line,list})=> {
  // const colors=presetPalettes[background];
  const colors = generate(background);

  return (
    <div className="sc-img06" style={{'--bgColor':colors[1],color:`${color}`}} >
      <Title title={title} line={line} />
      {list.map((item,i)=>
        <div className="m-item" key={i} style={{'--itemBgColor':colors[2]}}>
          <div className="m-img"><img src={item?.img}/></div>
          <div>
            <label><span>{item?.label}</span></label>
            <div>{item?.title}</div>
            <div>{item?.cnt}</div>
          </div>
        </div>
      )}
    </div>
  )
}

Img06.propTypes = {
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
};

Img06.defaultProps = {
  background: '#fff',
  color:'#333',
  title: 'xxx',
  line:true,
  list: []
};



export default Img06