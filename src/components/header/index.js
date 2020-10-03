import React from 'react';
import { HeaderMainContainer } from './style';
import LOGO_SVG from '../../assets/logo.svg';
import { SearchBarInput } from '../atoms/inputs';
import { PrimaryButton } from '../atoms/buttons';

const Header = ({ buildNotifications, buildUserBanner }) => {
  return (
    <HeaderMainContainer>
      <img alt={LOGO_SVG} src={LOGO_SVG} className="header-logo" />
      <div className="search-bar-container">
        <SearchBarInput />
      </div>
      <PrimaryButton text="+ ADD" background="#3d83fe" />
      {buildNotifications()}
      {buildUserBanner()}
    </HeaderMainContainer>
  );
};

export default Header;
