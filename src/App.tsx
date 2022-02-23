import React, { useState } from 'react';
import { User } from './interfaces';
import './App.css';

interface AppProps {
  headerText: string,
  extraText?: string,
}

const defaultFormData = {
  title: '',
  body: '',
};

function App({ headerText, extraText }: AppProps) {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData(defaultFormData);
  };

  const fetchUser = () => setUser({
    name: 'Bob',
    age: 23,
    country: 'usa',
    address: {
      street: 'Main St',
      number: 88,
      zip: '12345',
    },
    admin: false,
  });

  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}

      <button type="button" onClick={fetchUser}>Fetch User</button>
      {user && <p>{`hello ${user.name}`}</p>}

      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" value={title} onChange={onChange} />
        </label>
        <br />
        <label htmlFor="body">
          Body
          <input type="text" id="body" name="body" value={body} onChange={onChange} />
        </label>
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}

export default App;
