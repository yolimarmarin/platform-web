import styled from 'styled-components';

const PrimaryInputMainContainer = styled.input`
  background-color: ${(props) => (props.background)};
  border: none;
  cursor: pointer;
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
  width: ${(props) => props.width};
  height: 100%;
  padding:0;
  font-family: Nunito;
  font-size: 15px;
  

`;

const SearchBarInputMainContainer = styled.div`
  background-color: ${(props) => (props.background)};
  height: 50px;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width ? props.width : 'fit-content'};
  margin: ${(props) => props.margin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  .search-icon {
    width: 15px;
  }
  padding: 0 10px;

  @media (max-width: 950px) {
    min-width: fit-content;
    width: 90%;
    margin: 0 auto;
  }
`;

export { PrimaryInputMainContainer, SearchBarInputMainContainer };
