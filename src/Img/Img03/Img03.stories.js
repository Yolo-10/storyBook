import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import Img03 from './index';

export default {
    title:'Img',
    component:Img03
}

// 定义一个模板---- Img03 组件的 props 值从 参数中 获取 
const Template03 = (args) => {
    return <Img03 {...args}/>
}
//建立一个实例
export const ImgType03 = Template03.bind({});
//获取正式参数
ImgType03.args =  {
    ...data,
}
