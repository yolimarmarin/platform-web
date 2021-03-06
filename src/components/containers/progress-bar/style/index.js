import styled from 'styled-components';

const ProgressBarMainContainer = styled.div`
  width: 100%;
  min-width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #1a2d7d;
  border-radius: 7px;
  color: white;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;

  .circular-progress-bar-container {
    margin-top: 15px;
    div {
      width: 160px;
    }
  }

  .progress-bar {
    &-title {
      font-size: 30px;
      text-align: center;
      margin-top: 30px;
    }

    &-content-container {
      min-height: 100px;
      height: fit-content;
      display: flex;
      background-color: rgba(198, 198, 205, 0.13);
      border-radius: 19px;
      padding: 20px;
      margin: 15px 0 30px 0;
      box-sizing: border-box;
    }
  }

  @media (max-width: 768px) {
    .progress-bar {
      &-content-container {
        padding: 20px 10px;
      }
    }
  }
`;

const ProgressInfoMainContainer = styled.div`
  width: ${(props) => props.width};
  padding-right: ${(props) => (props.first ? '20px' : 0)};
  padding-left: ${(props) => (!props.first ? '20px' : 0)};
  border-right: ${(props) => (props.first ? '1px solid white' : 'none')};
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    &-description {
      &-container {
        display: flex;
        height: 15px;
        align-items: center;
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
      margin-top: 15px;
      font-size: 24px;
      min-height: 35px;
      .title {
        font-size: 45px;
      }
    }
  }

  @media (max-width: 768px) {
    padding-right: ${(props) => (props.first ? '10px' : 0)};
    padding-left: ${(props) => (!props.first ? '10px' : 0)};
    .info {
      &-content {
        margin-top: 10px;
        font-size: 17px;
      }
    }
  }

  @media (max-width: 1145px) {
    .info {
      &-content {
        .title {
          font-size: 33px;
        }
      }
    }
  }
`;

export { ProgressBarMainContainer, ProgressInfoMainContainer };
