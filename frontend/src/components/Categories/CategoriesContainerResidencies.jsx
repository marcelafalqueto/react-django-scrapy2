import React from "react";
import CategoriesCard from "./CategoriesCard";
import apartamento from "../../assets/Categories/apartamento.jpg"
import casa from "../../assets/Categories/casa.png"
import edificio from "../../assets/Categories/edificio.jpg"
import terreno from "../../assets/Categories/terreno.jpeg"

const CategoriesContainerResidencies = (props) => {
  return (
    <>
      <div className="w-9/12 mt-10 m-auto">
        <h1 className="text-3xl m-auto text-center border-b-4 border-primary w-40 ">
          {props.name}
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-1">
          <CategoriesCard description="Apartamento" photo={apartamento} />
          <CategoriesCard   description="Casa" photo={casa} />
          <CategoriesCard   description="Edificio" photo={edificio} />
          <CategoriesCard   description="Terreno" photo={terreno} />

        </div>
      </div>
    </>
  );
};

export default CategoriesContainerResidencies;
