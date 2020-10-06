import React, { useState } from 'react';
import Header from '../header';
import { NotificationButton } from '../atoms/buttons';
import BELL_PNG from '../../assets/bell.png';
import CHAT_PNG from '../../assets/chat.png';
import { UserBanner } from '../atoms/banners';
import USER_PNG from '../../assets/profile.png';
import EVENT_PNG from '../../assets/event.png';
import HOME_PNG from '../../assets/home.png'
import MENU_5_PNG from '../../assets/menu-5.png'
import MENU_4_PNG from '../../assets/menu-4.png'
import MENU_6_PNG from '../../assets/menu-6.png'
import MENU_3_PNG from '../../assets/menu-3.png'
import MENU_SVG from '../../assets/menu.svg'
import { NavBarButton } from '../atoms/buttons';

const Header_ = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const buildNotifications = () =>
    [
      {
        icon: BELL_PNG,
        items: [
          {
            icon: EVENT_PNG,
            time: 'Today, 10:30AM',
            title: 'You have a new sesion',
          },
          { icon: EVENT_PNG, time: 'Today, 10:30AM', title: 'You have a new sesion' },
        ],
      },
      { icon: CHAT_PNG, items: [] },
    ].map((option, key) => (
      <NotificationButton
        key={key}
        onClick={option.onClick}
        icon={option.icon}
        items={option.items}
      />
    ));

  const buildUserBanner = () => (
    <UserBanner name="Clarence Russell" photo={USER_PNG} circle={true} />
  );

  const handleShowMobileMenu = () => setShowMobileMenu(true);

  const handleCloseMobileMenu =() => setShowMobileMenu(false);

  const buildMobileMenu = () => [
    { icon: MENU_SVG, active: false, onClick: handleCloseMobileMenu },
    { icon: HOME_PNG, active: true, onClick: handleCloseMobileMenu },
    { icon: MENU_3_PNG, active: false, onClick: handleCloseMobileMenu },
    { icon: MENU_4_PNG, active: false, onClick: handleCloseMobileMenu },
    { icon: MENU_5_PNG, active: false, onClick: handleCloseMobileMenu },
    { icon: MENU_6_PNG, active: false, onClick: handleCloseMobileMenu },
  ].map((option, key) => (
    <NavBarButton key={key} icon={option.icon} onClick={option.onClick} active={option.active} />
  ));

  return (
    <Header
      buildNotifications={buildNotifications}
      buildUserBanner={buildUserBanner}
      showMobileMenu={showMobileMenu}
      handleShowMobileMenu={handleShowMobileMenu}
      buildMobileMenu={buildMobileMenu}
    />
  );
};

export default Header_;
