import React from "react";

const CategoriesCard = (props) => {
  return (
    <>
      <div className="card my-5 bg-base-100 shadow-xl image-full shrink-0">
        <figure>
          <img src={props.photo} />
        </figure>
        <div className="card-body">
          <h2 className="m-auto text-3xl">{props.description}</h2>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
