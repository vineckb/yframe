import React, { FC, useState, useRef, MouseEvent, useEffect } from 'react';
import { Wrapper, Container } from './styles';
import Frame, { FrameProps } from './Frame';

type Props = {
  frames: Array<FrameProps>,
  onAddFrame: (frame: FrameProps) => void;
}

const Portal: FC<Props> = ({ frames, onAddFrame }) => {
  const [drawing, setDrawing] = useState<boolean>(false);
  const container = useRef(null);
  const [frame, setFrame] = useState(null);

  const [start, setStart] = useState({
    top: 0,
    left: 0
  })
  const [end, setEnd] = useState({
    top: 0,
    left: 0
  })

  const handleMouseDown = (e: MouseEvent) => {
    const top = e.clientY - container.current.getBoundingClientRect().top;
    const left = e.clientX - container.current.getBoundingClientRect().left;
    setStart({ top, left });
    setEnd({ top: 0, left: 0 })
    setDrawing(true);
    setFrame({ top, left, width: 0, height: 0 });
  }

  const handleMouseUp = (e: MouseEvent) => {
    setStart({ top: 0, left: 0 });
    setDrawing(false);
    onAddFrame(frame);
  }

  const handleMouseMove = (e: MouseEvent) => {
    const top = e.clientY - container.current.getBoundingClientRect().top;
    const left = e.clientX - container.current.getBoundingClientRect().left;
    const width = left - start.left;
    const height = top - start.top;
    setFrame({ top: start.top, left: start.left, width, height });
  }

  return (
    <Wrapper>
      <Container
        ref={container}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        {frames.map((frame, index) => <Frame {...frame} key={index} />)}
        {frame && drawing && <Frame {...frame} />}
      </Container>
    </Wrapper>
  );
}

export default Portal;
