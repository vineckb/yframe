import styled from 'styled-components';
import Webview from '../../Webview';

export const TabContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: calc(100vh - 30px);
  flex-direction: column;
  display: flex;
`;

export const Page = styled(Webview)`
  flex: 1;
  width: 100%;
  height: auto;
`;
