import styled from 'styled-components';

const PrimaryDropdownMainContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-family: Nunito;
  box-shadow: 0 7px 5px 0 rgba(27, 20, 119, 0.11);

  .dropdown-header {
    &-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-title {
      color: #9d9bb6;
      width: -webkit-fill-available;
    }

    &-icon {
      width: 40px;
      margin-right: 15px;
    }

    &-display-icon {
      width: 10px;
    }
  }

  .dropdown-content {
    margin: 10px 20px 0 55px;
    font-size: 15px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    .dropdown-header {
      &-display-icon {
        display: none;
      }
    }
  }
`;

export { PrimaryDropdownMainContainer };
