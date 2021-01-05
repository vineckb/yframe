import { State, Action, Tab, ActionType } from './types';

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.NEW_TAB:
      const newTab: Tab = {
        title: 'New Tab',
        url: '',
        loading: false
      }

      return {
        ...state,
        tabs: [...state.tabs, newTab]
      }
    case ActionType.GO_TO:
      const nState = {
        ...state,
        tabs: state.tabs.map((tab, index) => {
          if (index === action.payload.index)
            return { ...tab, url: action.payload.url }
          else
            return tab
        })
      }
      return nState
  }
};

export default Reducer;
