import React from 'react';
import PropgressContainer from '../containers/progress';
import { ProgressCard } from '../atoms/cards';
import { WarningBanner } from '../atoms/banners';

const Progress = () => {
  const buildProgressOverview = () => <>Progress Overview</>;

  const buildProgressCards = () =>
    [
      { title: 'Total Webinars', amount: 9, background: null },
      { title: 'Total Webinars', amount: 9, background: null },
      { title: 'Total Webinars', amount: 9, background: null },
      { title: 'Total Webinars', amount: 9, background: null },
      { title: 'Total Webinars', amount: 9, background: '#1984ff' },
    ].map((card, key) => (
      <ProgressCard
        key={key}
        title={card.title}
        amount={card.amount}
        background={card.background}
      />
    ));

  const buildWarningBanner = () => (
    <WarningBanner
      title="Confirm your account details"
      text=" Please confirm your email and
  phone number"
    />
  );

  return (
    <PropgressContainer
      buildProgressOverview={buildProgressOverview}
      buildProgressCards={buildProgressCards}
      buildWarningBanner={buildWarningBanner}
    />
  );
};

export default Progress;
