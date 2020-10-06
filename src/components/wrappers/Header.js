import React from 'react';
import Header from '../header';
import { NotificationButton } from '../atoms/buttons';
import BELL_PNG from '../../assets/bell.png';
import CHAT_PNG from '../../assets/chat.png';
import { UserBanner } from '../atoms/banners';
import USER_PNG from '../../assets/profile.png';
import EVENT_PNG from '../../assets/event.png';

const Header_ = () => {
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

  const buildUserBanner = () => <UserBanner name="Clarence Russell" photo={USER_PNG} circle={true} />;

  return <Header buildNotifications={buildNotifications} buildUserBanner={buildUserBanner} />;
};

export default Header_;
