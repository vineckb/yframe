import React, { FC } from 'react';
import styled from 'styled-components';

const Element = styled.div`
  padding: 5px 10px;
`

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <Element>{title}</Element>
}

export default Title;
