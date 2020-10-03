import styled from 'styled-components';

const PrimaryButtonMainContainer = styled.button`
  background-color: ${(props) => (props.active ? props.background : 'transparent')};
  border: none;
  cursor: pointer;
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }

  padding: ${(props) => props.padding};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => props.margin};

  .navbar-icon{
      width: 25px;
  }
  
`;

export { PrimaryButtonMainContainer };
