import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TabTitle from './Title';
import Webview from '../Webview';
import AddressBar from '../AddressBar';
import { useStateContext } from '../../store';
import { ActionType } from '../../store/types';

const TabContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
`

type Tab = {
  index: number;
}

const Tab: FC<Tab> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const { title, url } = state.tabs[index]
  const isCurrent = state.currentTab === index;

  const handleURLSubmit = (url: string) => {

    dispatch({
      type: ActionType.GO_TO,
      payload: { index, url }
    })
  }

  return (
    <div>
      <TabTitle title={title} />

      { isCurrent &&
        <TabContainer>
          <AddressBar onSubmit={handleURLSubmit} />
          <Webview url={url} />
        </TabContainer>
      }
    </div>
  )
};

export default Tab;
