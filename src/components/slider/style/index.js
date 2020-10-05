import styled from 'styled-components';

const SliderMainContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  max-height: 250px;

  .slider {
    width: 100%;
    height: 100%;

    .carousel-slider {
      height: 100%;
    }
    .slide {
      background: white;
      height: 100%;
    }

    .slider-wrapper {
      height: 100%;
    }

    .carousel-status {
      display: none;
    }

    .label {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 5px;
      font-size: 11px;
      background-color: #3d84ff;
      color: white;
      padding: 5px 20px;
      border-radius: 20px;
    }

    .legend {
      display: none;
    }

    .control-prev {
      opacity: 1;
      ::before {
        padding: 10px 25px;
        background-color: white;
        background-image: url(${(props) => props.arrowLeft});
        background-repeat: no-repeat;
        background-size: 15px 15px;
        border-radius: 5px;
        background-position: center center;
        border-right: none;
      }
    }

    .control-next {
      opacity: 1;
      ::before {
        padding: 10px 25px;
        background-color: white;
        background-image: url(${(props) => props.arrowRight});
        background-repeat: no-repeat;
        background-size: 15px 15px;
        border-radius: 5px;
        background-position: center center;
        border-left: none;
      }
    }
  }

  .slider-content {
    display: flex;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &-children {
      z-index: 100;
      width: 75%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-text {
      font-size: 40px;
      color: white;
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .slider {
      .control-arrow {
        top: 60%;
      }

      .label {
        top: 10px;
        right: 10px;
      }
    }
    .slider-content {
      &-children {
        flex-direction: column;
        padding: 35px 0 70px 0;
        width: 90%;
      }

      &-text {
        font-size: 25px;
        width: 100%;
        text-align: start;
      }

      &-date {
        font-size: 20px;
        margin-top: 5px;
      }
    }
  }
`;

export { SliderMainContainer };
