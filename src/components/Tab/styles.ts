import styled from 'styled-components';

type BodyWrapperProps = {
  show: boolean;
}

export const BodyWrapper = styled.div<BodyWrapperProps>`
  display: ${props => props.show ? 'flex' : 'none'};
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: calc(100vh - 30px);
  flex-direction: column;
`;
