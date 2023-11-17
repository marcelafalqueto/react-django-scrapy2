import React from "react";
import CategoriesCard from "./CategoriesCard";
import predcomercial from "../../assets/Categories/predcomercial.jpg"
import galpao from "../../assets/Categories/galpao.jpg"
import salacomercial from "../../assets/Categories/salacomercial.jpg"

const CategoriesContainerComercials = (props) => {
  return (
    <>
      <div className="w-9/12 mt-10 m-auto">
        <h1 className="text-3xl m-auto text-center  border-b-4 border-primary w-40">
          {props.name}
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-1">
          <CategoriesCard description="Galpao" photo={galpao} />
          <CategoriesCard description="Predio comercial" photo={predcomercial} />
          <CategoriesCard description="Sala Comercial" photo={salacomercial} />

        </div>
      </div>
    </>
  );
};

export default CategoriesContainerComercials;
