import React, { FC } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../../../store';
import { ActionType } from '../../../../store/types';
import AddressBar from '../../../AddressBar';
import Webview from '../../../Webview';

type SingleTabBodyProps = {
  index: number;
};

const Page = styled(Webview)`
  width: 100%;
  height: 100%;
  overflow: auto;
`

const SingleTabBody: FC<SingleTabBodyProps> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const { url } = state.tabs[index];

  const handleURLSubmit = (url: string) => {
    dispatch({
      type: ActionType.GO_TO,
      payload: { index, url }
    })
  };

  const handleStartLoading = () => {
    dispatch({
      type: ActionType.LOAD_START,
      payload: index
    })
  };

  const handleStopLoading = () => {
    dispatch({
      type: ActionType.LOAD_STOP,
      payload: index
    })
  };

  const handleWillNavigate = (url: string) => {
    dispatch({
      type: ActionType.GO_TO,
      payload: {
        index, url
      }
    })
  };

  return (
    <>
      <AddressBar index={index} />

      <Page
        url={url}
        onStartLoading={handleStartLoading}
        onStopLoading={handleStopLoading}
        onWillNavigate={handleWillNavigate} />
    </>
  );
}

export default SingleTabBody;
