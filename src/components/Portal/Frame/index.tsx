import React, { FC, useState } from 'react';
import { useStateContext } from '../../../store';
import Webview from '../../Webview';
import { Wrapper } from './styles';
import DialogURL from './DialogURL';

export type FrameProps = {
  url?: string;
  width: number;
  height: number;
  top: number;
  left: number;
  onUpdateURL?: (url: string) => void;
}

const Frame: FC<FrameProps> = ({ url, width, height, top, left, onUpdateURL }) => {
  const [urlDialog, setUrlDialog] = useState<boolean>(url === undefined);

  const handleUrlEnter = (url: string) => {
    onUpdateURL(url);
    setUrlDialog(false);
  }

  return (
    <>
      { urlDialog && <DialogURL url={url} onEnter={handleUrlEnter} />}
      <Wrapper width={width} height={height} top={top} left={left}>
        {url && <Webview url={url} />}
      </Wrapper>
    </>
  )
}

export default Frame;
