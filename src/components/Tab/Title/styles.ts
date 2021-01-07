import styled from 'styled-components';

interface ElementProps {
  active: boolean;
};

export const Element = styled.div<ElementProps>`
  padding: 5px 10px;
  background: ${props => props.active ? '#fff' : '#ccc'} ;
`;
