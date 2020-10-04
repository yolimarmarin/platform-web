import React from 'react';
import { DashboardBanner } from '../../atoms/banners';
import BANNER_BACKGROUND_PNG from '../../../assets/banner-blue.png';
import BANNER_FIGURE_PNG from '../../../assets/banner-figure.png';
import { DashboardMainContainer } from './style';
import SectionTitle from '../section-title';
import { LearningCard } from '../../atoms/cards';

const DashboardContainer = ({ name, learning, icon }) => {
  const title = `Welcome back, ${name}`;
  const text = "Ta-da! You're up to date 🥳";
  return (
    <DashboardMainContainer>
      <SectionTitle title="Dashboard" justifyContent="space-between">
        <LearningCard title={learning} icon={icon} />
      </SectionTitle>
      <DashboardBanner
        backgroundImage={BANNER_BACKGROUND_PNG}
        title={title}
        text={text}
        bannerFigure={BANNER_FIGURE_PNG}
      />
    </DashboardMainContainer>
  );
};

export default DashboardContainer;
