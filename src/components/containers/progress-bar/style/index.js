import styled from 'styled-components';

const ProgressBarMainContainer = styled.div`
  width: 80%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #1a2d7d;
  border-radius: 7px;
  color: white;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;

  .circular-progress-bar-container{
      margin-top: 15px;
      div{
          width: 160px;
      }
  }

  .progress-bar {
    &-title {
      font-size: 30px;
    }

    &-content-container {
      display: flex;
      background-color: rgba(198, 198, 205, 0.13);
      border-radius: 19px;
      padding: 20px;
      margin: 15px 0 30px 0;
    }
  }
`;

const ProgressInfoMainContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  padding-right: ${(props) => (props.first ? '20px' : 0)};
  padding-left: ${(props) => (!props.first ? '20px' : 0)};
  border-right: ${(props) => (props.first ? '1px solid white' : 'none')};

  .info {
    &-description {
      &-container {
        display: flex;
      }

      &-circle {
        background-color: ${(props) => props.circleColor};
        height: 13px;
        width: 13px;
        border-radius: 50%;
        margin-right: 5px;
      }

      &-text {
        font-size: 14px;
      }
    }

    &-content {
      margin-top: 5px;
      font-size: 24px;
      .title {
        font-size: 45px;
      }
    }
  }
`;

export { ProgressBarMainContainer, ProgressInfoMainContainer };
