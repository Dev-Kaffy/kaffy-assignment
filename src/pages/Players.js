import React, { useState } from 'react';
import { images } from '../ImagesArray.json';
import { PlayerImages } from '../components/PlayerImages';
import { useUsers } from '../components/users';

export const Players = () => {
  const [page, setPage] = useState(1);

  //Custom Hooks
  const { users, loading } = useUsers();

  //data returned per page
  const limit_Per_Page = 6;

  const skip = page * limit_Per_Page - limit_Per_Page;
  const paginatedData = users.slice(skip, limit_Per_Page * page);

  const showImages = paginatedData.map((user) => {
    return (
      <PlayerImages
        key={user.login.uuid}
        image={user.picture.large}
        name={`${user.name.title} ${user.name.first} ${user.name.last}`}
        id={user.login.uuid}
      />
    );
  });

  //total num of players
  const total = users?.length;
  //all pages
  const totalPages = Math.ceil(total / limit_Per_Page);

  if (!loading) {
    return <h1>Users data Loading... </h1>;
  }

  return (
    <>
      <h2 className="halloffame"> My Hall Of Fame </h2>
      <div className="parentdiv">{showImages}</div>
      <div className="pagination-button">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <p className="pagination">
          Pages: {page} of {totalPages}
        </p>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
