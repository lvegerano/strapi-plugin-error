import React from 'react';
import { useLibrary } from '@strapi/helper-plugin';
// import PropTypes from 'prop-types';
//import { Test } from './TestComponent.styles';

const TestComponent = (props) => {
  const lib = useLibrary();
  console.log('lib', lib);
  return (
    <div className="TestComponentWrapper">
      Test content
    </div>
  )};


export default TestComponent;
