import React from 'react';
import PropTypes from 'prop-types';
import Map from './index';
import data from './data';

export default {
    title:'Part',
    component:Map,
}

const Template03 = (args) => <Map {...args}/>
export const MapTypes = Template03.bind({});
MapTypes.args = {
    ...data,
} 