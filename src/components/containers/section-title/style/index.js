import styled from 'styled-components';

const SectionTitleMainContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  .section {
    &-title {
      font-size: ${(props) => (props.fontSize ? props.fontSize : '30px')};
      margin-right: 15px;
      min-width: fit-content;
      color: ${(props) => props.color};
    }

    &-dash {
      display: ${(props) => (props.dash ? 'block' : 'none')};
      width: -webkit-fill-available;
      width: -moz-available;
      border-bottom: 2px solid #e8e8ee;
    }
  }

  @media (max-width: 768px) {
    .section {
      &-title {
        font-size: ${(props) => (props.fontSize ? props.fontSize : '25px')};
      }
    }
  }
`;

export { SectionTitleMainContainer };
