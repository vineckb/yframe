import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface AddressBarProps {
  url: string;
  onSubmit: (url: String) => void;
}

const AddressBar: FC<AddressBarProps> = ({ onSubmit, url }) => {
  const [localURL, setLocalURL] = useState<string>(url);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalURL(e.target.value);
  }

  useEffect(() => {
    setLocalURL(url);
  }, [url]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(localURL);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={localURL} onChange={handleChange} />

      <button type="submit">go</button>
    </form>
  )
}

export default AddressBar;
