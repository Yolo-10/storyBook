import React from 'react';
import PropTypes from 'prop-types'
import Title from '../../Title';
import './index.scss'

const Img01 = ({ title,color,background,line,id,list }) => {


  return (
    <div className="sc-Img01"c style={{background:`${background}`,color:`${color}`}}>
      <Title title={title} line={line} />

      <div className="m-bd">
        {list.map((item, i) =>
          <div className="m-item" key={i}>
            {item?.img &&
              <div className="m-img">
                <img src={item.img} alt="" />
              </div>
            }

            <div className='m-cnt'>
              <div className={`m-lab `}>
                <div className="m-ti">
                  {item?.title &&
                    <label>
                      {item?.title}
                    </label>
                  }
                </div>
                <div className="m-tl">
                  {item?.label &&
                    <label> {item?.label}</label>
                  }
                </div>
              </div>


              <div className='m-wd'>
                {item?.cnt &&
                  <p>
                    {item?.cnt}
                  </p>
                }
                {item?.list && item.list.map((o, j) =>
                  <span key={j} >
                    {id && <label>{j + 1}. </label>} {o} <br />
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

Img01.propTypes={
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
  /** 标题序号 */
  id:PropTypes.bool,
}

Img01.defaultProps={
  background:'#fff',
  color:'#333',
  line:true,
  title:'xxx',
  id:true,
  list:[],
}

export default Img01