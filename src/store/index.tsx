import React, { useReducer, createContext, useContext } from 'react';
import Reducer from './reducer';
import { State, Action } from './types';

const initialState: State = {
  tabs: [{
    title: 'New Tab',
    url: '',
    loading: false
  }],
  currentTab: 0
}
export interface Store {
  state: State;
  dispatch?: React.Dispatch<Action>;
}

export const Context = createContext<Store>({ state: initialState });

interface StoreProps {
  children: React.ReactNodeArray | React.ReactNode
}

const Store: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);

export default Store;
