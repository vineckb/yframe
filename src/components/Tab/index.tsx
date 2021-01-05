import React, { FC } from 'react';
import Title from './Title';
import Body from './Body';

interface Props {
  index: number;
}

const Tab: FC<Props> = ({ index }) => {
  return (
    <>
      <Title index={index} />
      <Body index={index} />
    </>
  )
};

export default Tab;
