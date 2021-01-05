import React, { FC, useEffect } from 'react';
import Tab from '../Tab';
import { useStateContext } from '../../store';
import { ActionType } from '../../store/types';

const Tabs: FC = () => {
  const { dispatch, state } = useStateContext();

  const addTab = () => {
    dispatch({
      type: ActionType.NEW_TAB
    })
  }

  return (
    <>
      <button onClick={addTab}>+</button>
      {state.tabs.map((_, index) => <Tab key={index} index={index} />)}
    </>
  )
}

export default Tabs;
