import React from 'react';
import { ProgressBarMainContainer, ProgressInfoMainContainer } from './style';
import CircularProgressBar from '../../atoms/circular-progress-bar';

const ProgressInfo = ({ text, title, circleColor, description, first }) => {
  return (
    <ProgressInfoMainContainer circleColor={circleColor} first={first}>
      <div className="info-description-container">
        <div className="info-description-circle" />
        <div className="info-description-text">{description}</div>
      </div>
      <div className="info-content">
        <span className="title">{title}</span>
        {text}
      </div>
    </ProgressInfoMainContainer>
  );
};

const ProgressBarContainer = ({ hoursCompleted, hoursToGo, progress }) => {
  return (
    <ProgressBarMainContainer>
      <div className="progress-bar-title">Progress overview</div>
      <div className="circular-progress-bar-container">
        <CircularProgressBar percentage={progress} />
      </div>
      <div className="progress-bar-content-container">
        <ProgressInfo
          circleColor="#FED200"
          description="Completed"
          text=" hours"
          title={hoursCompleted}
          first={true}
        />
        <ProgressInfo
          circleColor="#FF794F"
          description="Left to go"
          text=" hours"
          title={hoursToGo}
        />
      </div>
    </ProgressBarMainContainer>
  );
};

export default ProgressBarContainer;
