import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import styled from 'styled-components';

const Element = styled.div`
  padding: 5px 10px;
`

interface Props {
  index: number;
}

const Title: FC<Props> = ({ index }) => {
  const { state } = useStateContext();
  const { title } = state.tabs[index];

  return (
    <Element>
      {title}
    </Element>
  )
}

export default Title;
