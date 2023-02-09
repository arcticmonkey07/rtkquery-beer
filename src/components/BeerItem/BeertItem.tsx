import React, { FC } from "react";
import "./BeerItem.css";
import { IBeer } from "../../models/IBeer";

interface PostItemProps {
  beer: IBeer;
  remove: (post: IBeer) => void;
  update: (post: IBeer) => void;
}

const PostItem: FC<PostItemProps> = ({ beer, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(beer);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const name = prompt() || "";
    update({ ...beer, name });
  };

  return (
    <div className="beer-item" onClick={handleUpdate}>
      <img
        className="beer-item__img"
        src={beer.img}
        alt="beer-img"
      />
      <h3 className="beer-item__header">{beer.name}</h3>
      <span className="beer-item__sort">{beer.manufacturer}</span>
      <div className="beer-item__availability">
        <span className="beer-item__icon"></span>
        <span className="beer-item__availability-text">
          {beer.availability} ({beer.amount})
        </span>
      </div>
      <span className="beer-item__price">{beer.price} руб./шт</span>
      <button className="beer-item__delete" onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
