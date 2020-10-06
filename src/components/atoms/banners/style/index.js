import styled from 'styled-components';

const UserBannerMainContainer = styled.div`
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0;
  display: flex;
  align-items: center;
  min-width: ${(props) => (props.minWidth ? props.minWidth : 'fit-content')};
  font-size: 16px;
  font-family: Nunito;
  position: relative;

  .user-banner {
    &-photo {
      height: 75%;
      margin: 0 15px;
    }
  }

  @media (max-width: 768px) {
    .user-banner {
      &-text {
        display: none;
      }

      &-icon {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    .user-banner {
      &-circle {
        display: none;
      }
    }
  }
`;

const CircularDiv = styled.div`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  position: absolute;
  bottom: 13px;
  right: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DashboardBannerMainContainer = styled.div`
  width: 100%;
  position: relative;
  height: 150px;
  margin-top: 30px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  .banner {
    &-figure {
      width: 220px;
      position: absolute;
      bottom: 0;
    }

    &-title {
      margin: 0 0 20px 250px;
      font-size: 30px;
      letter-spacing: -0.86px;
    }

    &-text {
      margin-left: 250px;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    justify-content: flex-end;
    padding-bottom: 50px;
    box-sizing: border-box;
    background-image: none;
    background-color: #1984ff;
    border-radius: 10px;
    margin-top: 70px;

    .banner {
      &-figure {
        top: -80px;
        left: calc(50% - 110px);
      }

      &-title {
        margin: 0;
        text-align: center;
      }

      &-text {
        margin: 0;
        text-align: center;
        margin-top: 15px;
      }
    }
  }
`;

const WarningBannerMainContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 5px 20px 70px;
  font-size: 16px;
  font-family: Nunito;

  .bold {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 10px;
    text-align: center;
  }
`;

export {
  UserBannerMainContainer,
  DashboardBannerMainContainer,
  WarningBannerMainContainer,
  CircularDiv,
};
