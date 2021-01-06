import styled from 'styled-components';

interface WrapperProps {
  show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: calc(100vh - 30px);
  flex-direction: column;
  display: ${props => props.show ? 'flex' : 'none'};
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: auto;
`;
