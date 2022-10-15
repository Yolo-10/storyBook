import React from 'react';
import PropTypes from 'prop-types'
import Title from '../../Title';
import './index.scss'

const Img02 = ({title,color, background,line,btn,list }) => {
  return (
    <div className="sc-Img02" style={{background:`${background}`,color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item, i) => 
            i<=2&&(<div className="m-item" key={i}>
              <div className="m-img">
                <img src={item.img} alt="" />
              </div>
              <div className='m-cnt'>

                {item?.title &&
                  <div className="m-cnt-g1">{item?.title}</div>
                }

                {item?.cnt &&
                  <p className="m-cnt-g2">{item?.cnt}</p>
                }

                <div className='m-btn'>
                  {item?.btn && btn &&
                    <a href={item?.link&&item?.link}><button >{item.btn}</button></a>
                  }
                </div>
              </div>
            </div>)
        )}
      </div>
    </div>
  )
}

Img02.propTypes = {
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
  /** 按钮文本 */
  btn: PropTypes.bool,
}

Img02.defaultProps = {
  title:'XXX',
  color:'#333',
  background:'#fff',
  line:true,
  btn:true,
  list:[],
}



export default Img02