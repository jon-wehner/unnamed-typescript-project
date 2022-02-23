import React, { useState } from 'react';
import { User } from './interfaces';
import './App.css';

interface AppProps {
  headerText: string,
  extraText?: string,
}

function App({ headerText, extraText }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

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
    </>
  );
}

export default App;
