import React, { FC } from 'react';
import { Overlay, Container } from './styles';

const Dialog: FC = ({ children }) => {
  return (
    <Overlay>
      <Container>
        {children}
      </Container>
    </Overlay>
  );
}

export default Dialog;
