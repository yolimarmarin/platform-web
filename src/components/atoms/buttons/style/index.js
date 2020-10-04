import styled from 'styled-components';

const PrimaryButtonMainContainer = styled.button`
  background-color: ${(props) => (props.background ? props.background : 'transparent')};
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
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  position: ${(props) => props.position};
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};

  .button-text {
    color: ${(props) => props.color};
  }

  .navbar-icon {
    width: 18px;
  }

  .notification-icon {
    width: 23px;
  }

  .icon-button-icon{
    width:15px;
  }

`;

const CircularDiv = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  position:absolute;
  bottom: 5px;
  right: 0;
`;

export { PrimaryButtonMainContainer, CircularDiv };
