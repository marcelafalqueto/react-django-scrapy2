import React from "react";
import CategoriesCard from "./CategoriesCard";
import praia from "../../assets/praia.jpg";

const CategoriesContainerDiscounts = (props) => {
  return (
    <>
      <div className="w-9/12 mt-10 m-auto">
        <h1 className="text-3xl m-auto text-center  border-b-4 border-primary w-40 ">
          {props.name}
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-1">
          <CategoriesCard description="+25%" photo={praia} />
          <CategoriesCard description="+50%" photo={praia} />
          <CategoriesCard description="+75%" photo={praia} />
        </div>
      </div>
    </>
  );
};

export default CategoriesContainerDiscounts;
