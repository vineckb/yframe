import React, { FC, Props } from 'react';
import Webview from '../../Webview';
import { Wrapper } from './styles';

export type FrameProps = {
  url?: string;
  width: number;
  height: number;
  top: number;
  left: number;
}

const Frame: FC<FrameProps> = ({ url, width, height, top, left }) => {
  return (
    <Wrapper width={width} height={height} top={top} left={left}>
      { url && <Webview url={url} />}
    </Wrapper>
  )
}

export default Frame;
