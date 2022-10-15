import React from 'react';
import PropTypes from 'prop-types';
import data from './data';
import Img06 from './index';

export default {
    title:'Img',
    component:Img06
}

const Template06 = (args) => {
    return <Img06 {...args}/>
}

export const ImgType06 = Template06.bind({});
ImgType06.args =  {
    ...data,
}
