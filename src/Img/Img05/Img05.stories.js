import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import Img05 from './index';

export default {
    title:'Img',
    component:Img05
}

const Template05 = (args) => {
    return <Img05 {...args}/>
}

export const ImgType05 = Template05.bind({});
ImgType05.args =  {
    ...data,
}
