import React from 'react';
import { UserBannerMainContainer } from './style';
import ARROW_DOWN_PNG from '../../../assets/arrow-down.png';

const UserBanner = ({ name, photo }) => {
  return (
    <UserBannerMainContainer height="100%">
      <div className="user-banner-text">{name}</div>
      <img src={photo} alt={photo} className="user-banner-photo" />
      <img src={ARROW_DOWN_PNG} alt={ARROW_DOWN_PNG} className="user-banner-icon" />
    </UserBannerMainContainer>
  );
};

export { UserBanner };
