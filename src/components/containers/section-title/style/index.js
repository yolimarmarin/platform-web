import styled from 'styled-components';

const SectionTitleMainContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  .section {
    &-title {
    font-size: ${(props) => props.fontSize ? props.fontSize : '30px'};
      font-weight: bold;
      margin-right: 15px;
      min-width: fit-content;
      color: ${(props)=> props.color};
    }

    &-dash {
      display: ${(props) => (props.dash ? 'block' : 'none')};
      width: -webkit-fill-available;
      border-bottom: 2px solid #e8e8ee;
    }
  }
`;

export { SectionTitleMainContainer };
