import React from 'react';
import { ActivityMainContainer } from './style';
import SectionTitle from '../section-title';

const ActivityContainer = () => {
  return (
    <ActivityMainContainer>
      <SectionTitle title="Activity" justifyContent="space-between" dash={true}>
        <>Arrow</>
      </SectionTitle>
    </ActivityMainContainer>
  );
};

export default ActivityContainer;
