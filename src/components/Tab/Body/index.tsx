import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import { ActionType } from '../../../store/types';
import AddressBar from '../../AddressBar';
import { Page, TabContainer } from './styles'

interface Props {
  index: number;
};

const TabBody: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const isCurrent = state.currentTab === index;
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
      { isCurrent &&
        <TabContainer>
          <AddressBar index={index} />

          <Page
            url={url}
            onStartLoading={handleStartLoading}
            onStopLoading={handleStopLoading}
            onWillNavigate={handleWillNavigate} />
        </TabContainer>
      }
    </>
  )
}

export default TabBody;
