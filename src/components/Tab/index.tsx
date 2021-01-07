import React, { FC } from 'react';
import Title from './Title';
import { useStateContext } from '../../store';
import { BodyWrapper } from './styles';
import Body from './Body';

interface Props {
  index: number;
}

const Tab: FC<Props> = ({ index }) => {
  const { state } = useStateContext();
  const isCurrent = state.currentTab === index;

  return (
    <>
      <Title index={index} />
      <BodyWrapper show={isCurrent}>
        <Body index={index} />
      </BodyWrapper>
    </>
  )
};

export default Tab;
