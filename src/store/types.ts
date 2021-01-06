type Tabs = Array<Tab>;

export type State = {
  tabs: Tabs;
  currentTab: number;
};

export type HoleTabDataItem = {
  width: number;
  heigh: number;
  top: number;
  left: number;
  title: string;
  url: string;
  loading: boolean;
};

export type HoleTabData = {
  [index: number]: HoleTabDataItem
};

export type SplitTabData = {};

export enum TabType {
  SINGLE = 'Single Tab',
  SPLIT = 'Splited Tab',
  HOLE = 'Bored Tab',
};

export type Tab = {
  title: string;
  url: string;
  loading: boolean;
  type: TabType.SINGLE | TabType.SPLIT | TabType.HOLE,
  data?: SplitTabData | HoleTabData
};

export enum ActionType {
  NEW_TAB = 'New Tab',
  SWITCH_TAB = 'Switch Tab',
  CLOSE_TAB = 'Close Tab',
  LOAD_START = 'Start loading',
  LOAD_STOP = 'Stop loading',
  GO_TO = 'Navigate to URL',
};

export type Action = {
  type: ActionType.NEW_TAB | ActionType.SWITCH_TAB | ActionType.CLOSE_TAB | ActionType.LOAD_START | ActionType.LOAD_STOP | ActionType.GO_TO;
  payload?: any;
};
