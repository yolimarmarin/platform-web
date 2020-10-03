import styled from 'styled-components';

const UserBannerMainContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding:0;
  display:flex;
  align-items: center;
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};

  .user-banner{
      &-photo{
          height:75%;
          margin: 0 15px;
      }
  }
`;

export {UserBannerMainContainer}