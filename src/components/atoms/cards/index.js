import React from 'react';
import {
  LearningCardMainContainer,
  EventCardMainContainer,
  ProgressCardMainContainer,
  NotificationCardMainContainer,
} from './style';

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

const ProgressCard = ({ title, amount, background }) => {
  return (
    <ProgressCardMainContainer background={background}>
      <div className="progress-title">{title}</div>
      <div className="progress-amount">{amount}</div>
    </ProgressCardMainContainer>
  );
};

const NotificationCard = ({ icon, title, time }) => {
  return (
    <NotificationCardMainContainer width="100%">
      <img src={icon} alt={icon} className="notification-icon" />
      <div className="notification-info-container">
        <div className="notification-title">{title}</div>
        <div className="notification-time">{time}</div>
      </div>
    </NotificationCardMainContainer>
  );
};

export { LearningCard, EventCard, ProgressCard, NotificationCard };
