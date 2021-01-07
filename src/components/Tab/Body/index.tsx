import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import { TabType } from '../../../store/types';
import HoleTab from './Hole';
import SingleTab from './Single';

interface Props {
  index: number;
};

const TabBody: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const { type } = state.tabs[index];

  const types: { [key: string]: any } = {
    [TabType.SINGLE]: <SingleTab index={index} />,
    [TabType.HOLE]: <HoleTab index={index} />
  }

  return types[type];
}

export default TabBody;
