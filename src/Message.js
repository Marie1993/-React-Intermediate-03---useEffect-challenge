import React, { useEffect, useState } from 'react';

export default function Message() {
  const [isdisplay, setIsdisplay] = useState();
  useState(() => {
    console.log('User has logged in!');
    return () => console.log('By');
  }, []);

  return <h1>User is logged in</h1>;
}
