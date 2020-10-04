import React from 'react';
import { LearningCardMainContainer, EventCardMainContainer } from './style';

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

const EventCard = ({ icon, title, time }) => {
  return (
    <EventCardMainContainer width="100%">
      <img src={icon} alt={icon} className="event-icon" />
      <div className="event-info-container">
        <div className="event-time">{time}</div>
        <div className="event-title">{title}</div>
      </div>
    </EventCardMainContainer>
  );
};

export { LearningCard, EventCard };
