import React from 'react';
import { PortableText } from '@portabletext/react';
import components from './portableTextComponents';


// Create a component that uses PortableText with the custom components
const PortableTextRenderer = ({ value }) => {
  return <PortableText value={value} components={components} />;
};

export default PortableTextRenderer;
