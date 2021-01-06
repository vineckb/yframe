import React, { FC, useState } from 'react';
import { FrameProps } from '../../../Portal/Frame';
import Portal from '../../../Portal';

const TabHole: FC = () => {

  const [frames, setFrames] = useState<Array<FrameProps>>([{
    url: 'http://youtube.com',
    width: 500,
    height: 300,
    top: 150,
    left: 300,
  }, {
    url: 'http://youtube.com',
    width: 500,
    height: 300,
    top: 1000,
    left: 1500,
  }])

  const handleAddFrame = (frame: FrameProps) => {
    setFrames([...frames, frame])
  }

  return (
    <Portal frames={frames} onAddFrame={handleAddFrame}></Portal>
  );
};

export default TabHole;
