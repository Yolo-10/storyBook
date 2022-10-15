import React from 'react';
import PropTypes from 'prop-types';
import List12 from './index'
import data from './data'


export default {
  title: 'List',
  component: List12,
};
const Template = (args) => <List12 {...args} />;


export const ListType12 = Template.bind({});
ListType12.args = {
  ...data,
};