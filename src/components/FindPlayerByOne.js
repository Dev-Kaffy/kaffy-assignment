import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
//import { images } from '../ImagesArray.json';
import { useUsers } from './users';

export const FindPlayerByOne = () => {
  let { playerId } = useParams();

  const { users, loading } = useUsers();

  const user = users.find((e) => e.login.uuid == playerId);

  console.log(user);

  if (!loading) {
    return <h1>User data Loading </h1>;
  }

  return (
    <div className="singleCard">
      {user ? (
        <>
          <h2> {`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <img src={user.picture.large} alt={user.name.first} width={300} />
        </>
      ) : (
        <>
          <h2> User Does Not Exist</h2>
          <button>
            <Link to={'/players'}>Go Back</Link>
          </button>
        </>
      )}
    </div>
  );
};
