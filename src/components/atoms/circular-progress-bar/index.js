import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import AnimatedProgressProvider from '../../animated-progress-provider';
import { easeQuadInOut } from 'd3-ease';

const CircularProgressBar = ({ percentage }) => {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={percentage}
      duration={3}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbarWithChildren
            value={value}
            counterClockwise={false}
            styles={{
              path: {
                transition: 'none',
                stroke: '#FED200',
                strokeLinecap: 'round',
              },

              trail: {
                strokeLinecap: 'round',
                stroke:'#FF794F',
              },
            }}
          >
            <div
              className="progressbar-value"
              style={{
                fontSize: '40px',
                color: 'white',
                paddingBottom: '15px',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              {roundedValue}<span style={{fontSize: '20px'}}>%</span>
            </div>
          </CircularProgressbarWithChildren>
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default CircularProgressBar;
