import React from 'react';
import {
  ProgressMainContainer,
  ProgressOverviewContainer,
  ProgressContainer,
  ProgressCardsContainer,
} from './style';
import SectionTitle from '../section-title';

const PropgressContainer = ({ buildProgressOverview, buildProgressCards, buildWarningBanner }) => {
  return (
    <ProgressMainContainer>
      <ProgressOverviewContainer>{buildProgressOverview()}</ProgressOverviewContainer>
      <ProgressContainer>
        <SectionTitle title="Progress" dash={true} />
        <ProgressCardsContainer>{buildProgressCards()}</ProgressCardsContainer>
        {buildWarningBanner()}
      </ProgressContainer>
    </ProgressMainContainer>
  );
};

export default PropgressContainer;
