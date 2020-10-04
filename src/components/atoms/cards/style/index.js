import styled from 'styled-components';

const LearningCardMainContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 17px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  border-radius: 8px;
  margin-left: 15px;

  .learning {
    &-text {
      font-size: 12px;
      color: #9d9bb6;
      font-weight: bold;
      margin-bottom: 5px;
    }

    &-icon {
      height: 20px;
      width: 20px;
    }
    &-children-container {
      display: flex;
      width: 100px;
      align-items: center;
    }

    &-title {
      margin-left: 5px;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const EventCardMainContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 17px 25px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin: 10px 0;
  box-sizing: border-box;

  .event {
    &-icon {
      width: 60px;
      margin-right: 10px;
    }

    &-info-container {
      display: flex;
      flex-direction: column;
      width: calc(100% - 60px);
    }

    &-time {
      color: #9d9bb6;
      font-size: 15px;
      margin-bottom: 5px;
    }

    &-title {
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export { LearningCardMainContainer, EventCardMainContainer };
