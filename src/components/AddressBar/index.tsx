import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useStateContext } from '../../store'
import { ActionType } from '../../store/types'
import { Form, Input, Button } from './styles'

interface Props {
  index: number;
}

const AddressBar: FC<Props> = ({ index }) => {
  const { state, dispatch } = useStateContext();
  const [url, setURL] = useState<string>(state.tabs[index].url);

  useEffect(() => {
    setURL(state.tabs[index].url);
  }, [state.tabs[index].url, setURL])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  }

  useEffect(() => {
    setURL(url);
  }, [url]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.GO_TO,
      payload: {
        index,
        url: url
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={url} onChange={handleChange} />

      <Button type="submit">go</Button>
    </Form>
  )
}

export default AddressBar;
