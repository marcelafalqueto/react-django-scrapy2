import React from "react";
import { Link } from "react-router-dom";
import invest from "../assets/invest.jpg";

const Banner = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-[500px] min-w-[500px]">
            <img className="rounded-r-[100px]" src={invest} alt="" />
          </div>
          <div className="p-10">
            <h1 className="text-5xl font-bold ">HUNT UP</h1>
            <h1 className="text-4xl ">
              Encontre as melhores oportunidades de leilão de imoveis!
            </h1>
            <p className="py-6 text-xl">
              As melhores oportunidades estao nos leiloeiros desconhecidos.
              Nosso papel é trazer para voce todos os leiloes de imoveis do
              brasil em 1 so lugar para facilitar a sua vida e poder te ajudar a
              encontrar as melhores oportunidades possiveis!
            </p>
            <button className="btn btn-primary" type="button">
              <Link to="/loginpage">Faça Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
