import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled('webview')`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

interface WebviewProps {
  url: string;
  onStartLoading?: () => void;
  onStopLoading?: () => void;
  onWillNavigate?: (url: string) => void;
};

const Webview: React.FC<WebviewProps> = ({ url, onStartLoading, onStopLoading, onWillNavigate }) => {
  const ref = useRef(null);

  useEffect(() => {
    const callback = (e: any) => {
      e.preventDefault();
      onWillNavigate(e.url);
    };
    ref.current.addEventListener('will-navigate', callback);

    return () => ref.current && ref.current.removeEventListener('will-navigate', callback);
  }, [ref.current, onWillNavigate])

  useEffect(() => {
    ref.current.addEventListener('did-start-loading', onStartLoading);

    return () => ref.current && ref.current.removeEventListener('did-start-loading', onStartLoading);
  }, [ref.current, onStartLoading])

  useEffect(() => {
    ref.current.addEventListener('did-stop-loading', onStopLoading);

    return () => ref.current && ref.current.removeEventListener('did-stop-loading', onStopLoading);
  }, [ref.current, onStopLoading])

  return <Wrapper src={url} ref={ref} />
};

export default Webview;
