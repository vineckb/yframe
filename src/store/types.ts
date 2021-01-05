type Tabs = Array<Tab>;

export type State = {
  tabs: Tabs;
  currentTab: number;
}

export interface Tab {
  title: string;
  url: string;
  loading: boolean;
}

export enum ActionType {
  NEW_TAB = 'New Tab',
  GO_TO = 'Navigate to URL',
}

export type Action = {
  type: ActionType.NEW_TAB | ActionType.GO_TO;
  payload?: any;
}
