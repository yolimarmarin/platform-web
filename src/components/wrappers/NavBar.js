import React from 'react';
import NavBar from '../navbar';
import CHAT_PNG from '../../assets/chat.png';
import { NavBarButton } from '../atoms/buttons';

const NavBar_ = () => {
  const buildOptions = () =>
    [
      { icon: CHAT_PNG, active: false, onClick: null },
      { icon: CHAT_PNG, active: true, onClick: null },
      { icon: CHAT_PNG, active: false, onClick: null },
      { icon: CHAT_PNG, active: false, onClick: null },
      { icon: CHAT_PNG, active: false, onClick: null },
      { icon: CHAT_PNG, active: false, onClick: null },
    ].map((option, key) => (
      <NavBarButton key={key} icon={option.icon} onClick={option.onClick} active={option.active} />
    ));

  return <NavBar>{buildOptions()}</NavBar>;
};

export default NavBar_;
