import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  const [email, setEmail] = React.useState('');
  useEffect(() => {
    console.log('email has changed');
  }, [email]);

  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  const handleSubmit = (e) => {
    // faire un useEffect

    setIsUserLoggedIn((prevState) => true);
   
    e.preventDefault();
  };

  return (
    <>
      {isUserLoggedIn && <Message />}
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            placeholder="elon@spacex.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
        <button onClick={(event) => setIsUserLoggedIn(false)}>Lougout</button>
      </div>
    </>
  );
}
