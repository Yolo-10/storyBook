import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import Img04 from './index';

export default {
    title:'Img',
    component:Img04
}

const Template04 = (args) => {
    return <Img04 {...args}/>
}
//建立一个实例
export const ImgType04 = Template04.bind({});
//获取正式参数
ImgType04.args =  {
    ...data,
}
