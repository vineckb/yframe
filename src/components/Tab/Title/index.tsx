import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import { ActionType } from '../../../store/types';
import { Element } from './styles'

interface Props {
  index: number;
}

const Title: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const { title } = state.tabs[index];
  const active = state.currentTab === index;

  const closeTab = () => {
    dispatch({
      type: ActionType.CLOSE_TAB,
      payload: index
    })
  }

  return (
    <Element active={active}>
      {title}
      <button onClick={closeTab}>x</button>
    </Element>
  )
}

export default Title;
