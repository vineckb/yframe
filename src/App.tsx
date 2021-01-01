import React, { useState, FC } from 'react';
import { hot } from 'react-hot-loader';
import Webview from './components/Webview';
import AddressBar from './components/AddressBar';

const App: FC = () => {
  const [url, setURL] = useState<string>('');

  const handleURLSubmit = (url: string) => {
    setURL(url)
  }

  return (
    <>
      <AddressBar onSubmit={handleURLSubmit} />

      <Webview url={url} />
    </>
  )
}

export default hot(module)(App);
