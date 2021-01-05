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

  const handleStartLoading = () => {
    dispatch({
      type: ActionType.LOAD_START,
      payload: index
    })
  }

  const handleStopLoading = () => {
    dispatch({
      type: ActionType.LOAD_STOP,
      payload: index
    })
  }

  const handleWillNavigate = (url: string) => {
    dispatch({
      type: ActionType.GO_TO,
      payload: {
        index, url
      }
    })
  }

  return (
    <div>
      <TabTitle title={title} />

      { isCurrent &&
        <TabContainer>
          <AddressBar url={url} onSubmit={handleURLSubmit} />
          <Webview
            url={url}
            onStartLoading={handleStartLoading}
            onStopLoading={handleStopLoading}
            onWillNavigate={handleWillNavigate} />
        </TabContainer>
      }
    </div>
  )
};

export default Tab;
