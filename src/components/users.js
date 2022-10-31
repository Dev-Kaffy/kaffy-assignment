import { useState, useEffect } from 'react';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data) throw Error('Could not fetch Data for Resource');

        setUsers(data.results);
        setLoading(true);
      })
      .catch((err) => {
        throw Error('Could not fetch Data for Resource');
      });
  }, [0]);

  return { users, loading };
}
