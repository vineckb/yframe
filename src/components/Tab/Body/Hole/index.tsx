import React, { FC, useState } from 'react';
import { FrameProps } from '../../../Portal/Frame';
import Portal from '../../../Portal';

type HoleTabBodyProps = {
  index: number;
}

const HoleTabBody: FC<HoleTabBodyProps> = () => {

  const [frames, setFrames] = useState<Array<FrameProps>>([])

  const handleAddFrame = (frame: FrameProps) => {
    setFrames([...frames, frame])
  }

  const handleUpdateFrame = (index: number, frame: FrameProps) => {
    setFrames([...frames.map((_, i) => index === i ? frame : _)])
  }

  return (
    <>
      <Portal
        frames={frames}
        onAddFrame={handleAddFrame}
        onUpdateFrame={handleUpdateFrame} />
    </>
  );
};

export default HoleTabBody;
