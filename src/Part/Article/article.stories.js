import React from 'react';
import PropTypes from 'prop-types';
import Article from './index';
import data from './data';

export default {
    title:'Part',
    component:Article,
}

const Template01 = (args) => <Article {...args}/>
export const ArticleTypes = Template01.bind({});
ArticleTypes.args = {
    ...data,
} 