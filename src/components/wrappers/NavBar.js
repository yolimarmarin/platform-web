import React from 'react';
import NavBar from '../navbar';
import HOME_PNG from '../../assets/home.png'
import MENU_5_PNG from '../../assets/menu-5.png'
import MENU_4_PNG from '../../assets/menu-4.png'
import MENU_6_PNG from '../../assets/menu-6.png'
import MENU_3_PNG from '../../assets/menu-3.png'
import MENU_SVG from '../../assets/menu.svg'
import { NavBarButton } from '../atoms/buttons';

const NavBar_ = () => {
  const buildOptions = () =>
    [
      { icon: MENU_SVG, active: false, onClick: null },
      { icon: HOME_PNG, active: true, onClick: null },
      { icon: MENU_3_PNG, active: false, onClick: null },
      { icon: MENU_4_PNG, active: false, onClick: null },
      { icon: MENU_5_PNG, active: false, onClick: null },
      { icon: MENU_6_PNG, active: false, onClick: null },
    ].map((option, key) => (
      <NavBarButton key={key} icon={option.icon} onClick={option.onClick} active={option.active} />
    ));

  return <NavBar>{buildOptions()}</NavBar>;
};

export default NavBar_;
