import React from 'react'
import PropTypes from 'prop-types';
import Img02 from './index'
import data from './data'

export default{
    title:'Img',
    component:Img02,
}

const Template02 = (args) => <Img02 {...args}/>
export const ImgType02 = Template02.bind({});
ImgType02.args ={
    ...data,
}