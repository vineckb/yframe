import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('webview')`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

interface WebviewProps {
  url: string;
};

const Webview: React.FC<WebviewProps> = ({ url }) => {
  return <Wrapper src={url} />
};

export default Webview;
