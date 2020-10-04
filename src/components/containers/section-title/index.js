import React from 'react';
import { SectionTitleMainContainer } from './style';

const SectionTitle = ({ justifyContent, title, dash, children }) => {
  return (
    <SectionTitleMainContainer justifyContent={justifyContent} dash={dash}>
      <div className="section-title">{title}</div>
      <div className="section-dash" />
      {children}
    </SectionTitleMainContainer>
  );
};

export default SectionTitle;
