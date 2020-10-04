import React from 'react';
import { LearningCardMainContainer } from './style';

const LearningCard = ({ title, icon, width, height }) => {
  return (
    <LearningCardMainContainer width={width} height={height}>
      <div className="learning-text">Currently Learning</div>
      <div className="learning-children-container">
        <img className="learning-icon" src={icon} alt={icon} />
        <div className="learning-title">{title}</div>
      </div>
    </LearningCardMainContainer>
  );
};

export { LearningCard };
