import styled from 'styled-components';

type WrapperProps = {
  width: number;
  height: number;
  top: number;
  left: number;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`
