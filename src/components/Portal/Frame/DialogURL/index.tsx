import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import Dialog from '../../../Dialog';
import { Form, Label, Input, Button } from './styles';

type DialogUrlProps = {
  url: string;
  onEnter: (url: string) => void;
}

const DialogUrl: FC<DialogUrlProps> = ({ url, onEnter }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onEnter(inputRef.current.value);
  }

  return (
    <Dialog>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="DialogURL-Input">Enter URL:</Label>
        <Input
          id="DialogURL-Input"
          type="text"
          ref={inputRef}
          placeholder="http://..."
          value={url}
          autoFocus={true} />
        <Button type="submit">Confirm</Button>
      </Form>
    </Dialog>
  )
}

export default DialogUrl;
