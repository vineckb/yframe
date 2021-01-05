import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import { ActionType } from '../../../store/types';
import styled from 'styled-components';

const Element = styled.div`
  padding: 5px 10px;
`

interface Props {
  index: number;
}

const Title: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const { title } = state.tabs[index];

  const closeTab = () => {
    dispatch({
      type: ActionType.CLOSE_TAB,
      payload: index
    })
  }

  return (
    <Element>
      {title}
      <button onClick={closeTab}>x</button>
    </Element>
  )
}

export default Title;
