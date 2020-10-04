import React from 'react';
import ActivityContainer from '../containers/activity';
import { PrimaryDropdown } from '../atoms/dropdowns';
import ASSIGNMENT_PNG from '../../assets/assignment-icon.png';
import EVENT_PNG from '../../assets/event-icon.png';
import FOLLOWER_PNG from '../../assets/follower-icon.png';

const Activity = () => {
  const contentSample =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const buildActivities = () =>
    [
      { icon: FOLLOWER_PNG, title: 'You have 5 new followers', content: contentSample },
      { icon: ASSIGNMENT_PNG, title: 'You have 5 new assignments', content: contentSample },
      { icon: EVENT_PNG, title: 'You have 5 pending readings 🤓', content: contentSample },
    ].map((item, key) => (
      <PrimaryDropdown icon={item.icon} content={item.content} title={item.title} key={key} />
    ));
  return <ActivityContainer buildActivities={buildActivities} />;
};

export default Activity;
