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
  const ref = useRef(null)

  useEffect(() => {
    const callback = (e: any) => {
      e.preventDefault();
      onWillNavigate(e.url);

    };
    ref.current.addEventListener('will-navigate', callback);

    return () => ref.current.removeEventListener('will-navigate', callback);
  }, [ref, onWillNavigate])

  const handleStartLoading = useCallback(() => {
    onStartLoading();
  }, []);
  useEffect(() => {
    ref.current.addEventListener('did-start-loading', handleStartLoading);

    return () => ref.current.removeEventListener('did-start-loading', handleStartLoading);
  }, [ref, handleStartLoading])

  const handleStopLoading = useCallback(() => {
    onStopLoading();
  }, []);
  useEffect(() => {
    ref.current.addEventListener('did-stop-loading', handleStopLoading);

    return () => ref.current.removeEventListener('did-stop-loading', handleStopLoading);
  }, [ref, handleStartLoading])

  return <Wrapper src={url} ref={ref} />
};

export default Webview;
