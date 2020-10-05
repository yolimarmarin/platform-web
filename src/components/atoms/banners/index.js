import React from 'react';
import {
  UserBannerMainContainer,
  DashboardBannerMainContainer,
  WarningBannerMainContainer,
} from './style';
import ARROW_DOWN_PNG from '../../../assets/arrow-down.png';
import WARNING_BG_PNG from '../../../assets/warning-bg.png';

const UserBanner = ({ name, photo }) => {
  return (
    <UserBannerMainContainer height="100%">
      <div className="user-banner-text">{name}</div>
      <img src={photo} alt={photo} className="user-banner-photo" />
      <img src={ARROW_DOWN_PNG} alt={ARROW_DOWN_PNG} className="user-banner-icon" />
    </UserBannerMainContainer>
  );
};

const DashboardBanner = ({ backgroundImage, bannerFigure, title, text }) => {
  return (
    <DashboardBannerMainContainer backgroundImage={backgroundImage}>
      <img src={bannerFigure} alt={bannerFigure} className="banner-figure" />
      <div className="banner-title">{title}</div>
      <div className="banner-text">{text}</div>
    </DashboardBannerMainContainer>
  );
};

const WarningBanner = ({ title, text }) => {
  return (
    <WarningBannerMainContainer backgroundImage={WARNING_BG_PNG}>
      <div>
        <span className="bold">{title}</span>
        {text}
      </div>
    </WarningBannerMainContainer>
  );
};

export { UserBanner, DashboardBanner, WarningBanner };
