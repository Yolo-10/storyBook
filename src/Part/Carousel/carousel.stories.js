import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './index';
import data from './data';

export default {
    title:'Part',
    component:Carousel,
}

const Template02 = (args) => <Carousel {...args}/>
export const CarouselTypes = Template02.bind({});
CarouselTypes.args = {
    ...data,
} 