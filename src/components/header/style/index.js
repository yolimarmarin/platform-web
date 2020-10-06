import styled from 'styled-components';

const HeaderMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 34px 0 rgba(27, 20, 119, 0.1);

  .search-bar-container {
    width: -webkit-fill-available;
    display: flex;
    justify-content: center;
  }

  .notifications-container{
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .notifications-container{
      display:none;
    }

    .header-logo{
      width:150px;
    }
  }

  @media (max-width: 950px) {
    .search-bar-container{
      display:none;
    }
    .notifications-container{
      width: -webkit-fill-available;
      justify-content: flex-end;
    }
  }

  @media (min-width: 769px) {
    .header-menu {
      display: none;
    }
  }
`;

export { HeaderMainContainer };
