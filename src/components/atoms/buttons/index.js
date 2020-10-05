import React, { useState } from 'react';
import { PrimaryButtonMainContainer, CircularDiv } from './style';
import PrimaryTooltip from '../../tooltip';
import { NotificationCard } from '../cards';

const PrimaryButton = ({ onClick, text, background }) => {
  return (
    <PrimaryButtonMainContainer
      onClick={onClick}
      padding="15px 5px"
      background={background}
      width="80px"
      height="50px"
      borderRadius="16px"
      color="white"
      minWidth="80px"
      margin="0 30px 0 0"
    >
      <div className="button-text">{text}</div>
    </PrimaryButtonMainContainer>
  );
};

const NavBarButton = ({ onClick, active, icon }) => {
  return (
    <PrimaryButtonMainContainer
      onClick={onClick}
      padding="17px 5px"
      background={active ? '#2a5dfe' : null}
    >
      <img className="navbar-icon" alt={icon} src={icon} />
    </PrimaryButtonMainContainer>
  );
};

const NotificationButton = ({ icon, items }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onClick = () => {
    setShowTooltip(!showTooltip);
  };

  const keepOpen = (e) => {
    e.stopPropagation();
    setShowTooltip(true);
  };

  const closeTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <PrimaryButtonMainContainer
      onClick={onClick}
      padding="0 5px"
      width="20px"
      margin="0 20px 0 0"
      position="relative"
    >
      <img className="notification-icon" alt={icon} src={icon} />
      {items.length !== 0 ? <CircularDiv background="#3d83fe" /> : null}
      <PrimaryTooltip show={showTooltip} onClick={(e) => keepOpen(e)}>
        {items.map((item, key) => (
          <NotificationCard key={key} time={item.time} title={item.title} icon={item.icon} />
        ))}
      </PrimaryTooltip>
      {showTooltip ? <div className="background-div" onClick={(e) => closeTooltip(e)} /> : null}
    </PrimaryButtonMainContainer>
  );
};

const IconButton = ({ onClick, icon }) => {
  return (
    <PrimaryButtonMainContainer
      onClick={onClick}
      padding="8px 17px"
      width="20px"
      margin="0 0 0 10px"
      background="#e5e5ee"
      borderRadius="5px"
    >
      <img className="icon-button-icon" alt={icon} src={icon} />
    </PrimaryButtonMainContainer>
  );
};

export { NavBarButton, PrimaryButton, NotificationButton, IconButton };
