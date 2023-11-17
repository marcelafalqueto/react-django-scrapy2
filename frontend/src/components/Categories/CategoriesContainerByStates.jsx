import React from 'react'
import CategoriesCard from "./CategoriesCard";
import rio from "../../assets/categories/rio.png";
import sp from "../../assets/categories/sp.jpg";
import df from "../../assets/categories/df.jpg";
import go from "../../assets/categories/go.jpg";
import rs from "../../assets/categories/rs.jpg";

const CategoriesContainerByStates = (props) => {
  return (
    <>
      <div className="w-9/12 mt-10 m-auto">
        <h1 className="text-3xl m-auto text-center border-b-4 border-primary w-32">
          {props.name}
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-1">
          <CategoriesCard description="RJ" photo={rio} />
          <CategoriesCard description="SP" photo={sp} />
          <CategoriesCard description="DF" photo={df} />
          <CategoriesCard description="GO" photo={go} />
          <CategoriesCard description="RS" photo={rs} />
        </div>
      </div>
    </>
  )
}

export default CategoriesContainerByStates