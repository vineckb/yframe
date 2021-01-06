import React, { FC } from 'react';
import { useStateContext } from '../../../store';
import AddressBar from '../../AddressBar';
import { Wrapper, Container } from './styles'
import HoleTab from './Hole';

interface Props {
  index: number;
};

const TabBody: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const isCurrent = state.currentTab === index;

  return (
    <Wrapper show={isCurrent}>
      <AddressBar index={index} />

      <Container>
        {/* <SingleTab /> */}
        <HoleTab />
      </Container>
    </Wrapper>
  )
}

export default TabBody;
