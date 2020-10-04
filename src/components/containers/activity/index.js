import React from 'react';
import { ActivityMainContainer,ActivityDropdownsContainer } from './style';
import SectionTitle from '../section-title';
import {IconButton} from '../../atoms/buttons'
import ARROW_RIGHT_SVG from '../../../assets/arrow-right.svg';

const ActivityContainer = ({ buildActivities }) => {
  return (
    <ActivityMainContainer>
      <SectionTitle title="Activity" justifyContent="space-between" dash={true}>
        <IconButton icon={ARROW_RIGHT_SVG}/>
      </SectionTitle>
      <ActivityDropdownsContainer>{buildActivities()}</ActivityDropdownsContainer>
    </ActivityMainContainer>
  );
};

export default ActivityContainer;
