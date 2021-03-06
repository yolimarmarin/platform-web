import React, {useState, useEffect} from 'react';
import { ActivityMainContainer,ActivityDropdownsContainer } from './style';
import SectionTitle from '../section-title';
import {IconButton} from '../../atoms/buttons'
import ARROW_RIGHT_SVG from '../../../assets/arrow-right.svg';

const ActivityContainer = ({ buildActivities }) => {

  const hasWindow = typeof window !== 'undefined';

  const getWidth = () => `${window.innerWidth}px`

  const [width,setWidth] = useState(getWidth())

  useEffect(() => {
      const handleResize =()=> {
        setWidth(getWidth());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);


  return (
    <ActivityMainContainer>
      <SectionTitle title="Activity" justifyContent="space-between" dash={true}>
        { width > '768px' ? <IconButton icon={ARROW_RIGHT_SVG}/> : null}
      </SectionTitle>
      <ActivityDropdownsContainer>{buildActivities()}</ActivityDropdownsContainer>
    </ActivityMainContainer>
  );
};

export default ActivityContainer;
