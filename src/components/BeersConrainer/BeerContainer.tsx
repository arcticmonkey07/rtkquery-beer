import React, { useState, useEffect } from "react";
import './BeerContainer.css';
import { beerAPI } from "../../services/BeerService";
import BeerItem from "../BeerItem/BeertItem";
import { IBeer } from "../../models/IBeer";

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const [updateBeer, {}] = beerAPI.useUpdateBeerMutation();
  const [deleteBeer, {}] = beerAPI.useDeleteBeerMutation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLimit(3);
  //   }, 2000);
  // });

  const {
    data: beers,
    error,
    isLoading,
    refetch,
  } = beerAPI.useFetchAllBeersQuery(limit);

  const handleRemove = (beer: IBeer) => {
    deleteBeer(beer);
  };

  const handleUpdate = (beer: IBeer) => {
    updateBeer(beer);
  };

  return (
    <>
        <button onClick={() => refetch()} style={{ marginBottom: "30px" }}>Refetch</button>
      <div className="beers-list">
        {isLoading && <h2>Идет загрузка...</h2>}
        {error && <h2>Произошла ошибка при загрузке</h2>}
        {beers &&
          beers.map((beer) => (
            <BeerItem
              remove={handleRemove}
              update={handleUpdate}
              beer={beer}
              key={beer.id}
            />
          ))}
      </div>
    </>
  );
};

export default PostContainer;
