import React from 'react';
import { TooltipMainContainer } from './style';

const PrimaryTooltip = ({
  children,
  show,
  triangleLeft = '66%',
  left = 'calc(-150px - 100%)',
  onClick,
}) => {
  return (
    <TooltipMainContainer show={show} triangleLeft={triangleLeft} left={left} onClick={onClick}>
      {children}
    </TooltipMainContainer>
  );
};

export default PrimaryTooltip;
