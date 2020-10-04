import styled from 'styled-components';

const UserBannerMainContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0;
  display: flex;
  align-items: center;
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};

  .user-banner {
    &-photo {
      height: 75%;
      margin: 0 15px;
    }
  }
`;

const DashboardBannerMainContainer = styled.div`
  width: 100%;
  position: relative;
  height: 128px;
  margin-top: 30px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:white;

  .banner {
    &-figure {
      width: 200px;
      position: absolute;
      bottom: 0;
    }

    &-title {
      margin: 0 0 20px 220px;
      font-size: 25px;
    }

    &-text {
      margin-left: 220px;
      font-size: 17px;
    }
  }
`;

export { UserBannerMainContainer, DashboardBannerMainContainer };
