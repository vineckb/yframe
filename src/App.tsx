import React, { useState, FC } from 'react';
import { hot } from 'react-hot-loader';
import Tabs from './components/Tabs/index';
import Store, { useStateContext } from './store';

const App: FC = () => {
  const tabs = [1];
  const { dispatch } = useStateContext();

  return (
    <Store>
      <Tabs />
    </Store>
  )
}

export default hot(module)(App);
