import React from 'react';
import { SectionTitleMainContainer } from './style';

const SectionTitle = ({ justifyContent, title, dash, children, fontSize, width, color }) => {
  return (
    <SectionTitleMainContainer
      justifyContent={justifyContent}
      dash={dash}
      fontSize={fontSize}
      width={width}
      color={color}
    >
      <div className="section-title">{title}</div>
      <div className="section-dash" />
      {children}
    </SectionTitleMainContainer>
  );
};

export default SectionTitle;
