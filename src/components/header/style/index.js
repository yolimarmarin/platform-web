import styled from 'styled-components';

const HeaderMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0 2px 34px 0 rgba(27,20,119,0.1);

  .search-bar-container{
    width: -webkit-fill-available;
    display:flex;
    justify-content:center;
  }
`;

export { HeaderMainContainer };
