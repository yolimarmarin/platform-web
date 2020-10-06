import styled from 'styled-components';

const TooltipMainContainer = styled.div`
    width: 300px;
    background-color: white;
    position:absolute;
    border-radius:5px;
    display:${(props)=> props.show ? 'flex' : 'none'};
    flex-direction: column;
    top: 75px;
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    z-index:100000;

    &::after {
    content: ' ';
    position: absolute;
    top: -5px;
    left: ${(props) => props.triangleLeft};
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: white;
    transform: rotate(45deg);
  }
`

export {
    TooltipMainContainer 
}