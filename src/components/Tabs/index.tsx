import React, { FC, useEffect } from 'react';
import Tab from '../Tab';
import { useStateContext } from '../../store';
import { ActionType } from '../../store/types';
import { Wrapper, NewTabButton } from './styles';

const Tabs: FC = () => {
  const { dispatch, state } = useStateContext();

  const addTab = () => {
    dispatch({
      type: ActionType.NEW_TAB
    });
    dispatch({
      type: ActionType.SWITCH_TAB,
      payload: state.tabs.length
    });
  };

  return (
    <Wrapper>
      {state.tabs.map((_, index) => <Tab key={index} index={index} />)}
      <NewTabButton onClick={addTab}>+</NewTabButton>
    </Wrapper>
  );
};

export default Tabs;
