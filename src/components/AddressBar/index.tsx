import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

interface AddressBarProps {
  onSubmit: (url: String) => void;
}

const AddressBar: FC<AddressBarProps> = ({ onSubmit }) => {
  const [url, setURL] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={handleChange} />

      <button type="submit">go</button>
    </form>
  )
}

export default AddressBar;
