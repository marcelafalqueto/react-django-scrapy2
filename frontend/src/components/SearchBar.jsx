import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { colourOptions } from "./Categories/data";

const animatedComponents = makeAnimated();

const SearchBar = () => {
  return (
    <>
      <div className="form-control">
        <div className="my-5">
          <div className="input-group flex flex-col lg:flex-row justify-evenly">
            {/* campo para selecionar as categorias buscadas  */}
            <Select
              className="pt-6 w-[100%] lg:w-[30%]"
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={colourOptions}
            />
            {/* agrupamento de campo de busca com lupa  */}
            <div className="flex flex-row w-[100%] lg:w-[30%]">
              {/* campo para digitar cidade  */}
              <input
                type="text"
                placeholder="Digite o nome da cidade"
                className="input input-bordered mt-5 w-full"
              />
              <div>
                {/* botao de lupa  */}
                <button className="btn btn-square mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
