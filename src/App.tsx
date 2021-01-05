import React, { useState, FC } from 'react';
import { hot } from 'react-hot-loader';
import Tabs from './components/Tabs/index';
import Store from './store';

const App: FC = () => {

  return (
    <Store>
      <Tabs />
    </Store>
  )
}

export default hot(module)(App);
