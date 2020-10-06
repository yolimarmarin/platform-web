import React from 'react';
import { HeaderMainContainer } from './style';
import LOGO_SVG from '../../assets/logo.svg';
import { SearchBarInput } from '../atoms/inputs';
import { PrimaryButton } from '../atoms/buttons';
import MENU_SVG from '../../assets/menu-grey.svg';

const Header = ({ buildNotifications, buildUserBanner }) => {
  return (
    <HeaderMainContainer>
      <img alt={MENU_SVG} src={MENU_SVG} className="header-menu" />
      <img alt={LOGO_SVG} src={LOGO_SVG} className="header-logo" />
      <div className="search-bar-container">
        <SearchBarInput />
      </div>
      <div className="notifications-container">
        <PrimaryButton text="+ ADD" background="#3d83fe" />
        {buildNotifications()}
      </div>
      {buildUserBanner()}
    </HeaderMainContainer>
  );
};

export default Header;
