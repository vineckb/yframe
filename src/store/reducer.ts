import { State, Action, TabType, ActionType } from './types';

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.NEW_TAB:
      return {
        ...state,
        tabs: [...state.tabs, {
          title: 'New Tab',
          url: '',
          loading: false,
          type: TabType.SINGLE
        }]
      }
    case ActionType.SWITCH_TAB:
      return {
        ...state,
        currentTab: action.payload
      }
    case ActionType.GO_TO:
      return {
        ...state,
        tabs: state.tabs.map((tab, index) => {
          if (index === action.payload.index)
            return { ...tab, url: action.payload.url }
          else
            return tab
        })
      }
    case ActionType.LOAD_START:
      return {
        ...state,
        tabs: state.tabs.map((tab, index) => {
          if (index === action.payload)
            return { ...tab, loading: true }
          else
            return tab
        })
      }
    case ActionType.LOAD_STOP:
      return {
        ...state,
        tabs: state.tabs.map((tab, index) => {
          if (index === action.payload)
            return { ...tab, loading: false }
          else
            return tab
        })
      }
    case ActionType.CLOSE_TAB:
      return {
        ...state,
        tabs: state.tabs.filter((tab, index) => index !== action.payload)
      }
  }
};

export default Reducer;
