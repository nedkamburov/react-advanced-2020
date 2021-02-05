import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status >= 200 && response.status < 299) {
          return response.json()
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then(data => {
        const { login } = data;
        setUser(login);
        setIsLoading(false);
      })
      .catch(err => {
        setIsError(true);
      })
  })

  if (isLoading) {
    return <div>
      <h2>Loading...</h2>
    </div>;
  }
  if (isError) {
    return <div>
      <h2>Something went wrong...</h2>
    </div>;
  }

  return <div>
    <h2>{user}</h2>
  </div>;

};

export default MultipleReturns;
