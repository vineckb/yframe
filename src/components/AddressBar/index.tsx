import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useStateContext } from '../../store'
import { ActionType } from '../../store/types'

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={handleChange} />

      <button type="submit">go</button>
    </form>
  )
}

export default AddressBar;
