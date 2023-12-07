import React from "react";
import { Link } from "react-router-dom";
import openning from "../assets/openning-door.jpg";

const BannerRegister = () => {
  return (
    <>
      <div className="my-10">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="max-w-[400px] min-w-[400px] ">
            <img className="rounded-l-[100px]" src={openning} alt="" />
          </div>
          <div className="p-10">
            <h1 className="text-5xl font-bold">
              Descubra o mundo dos leiloes!
            </h1>
            <p className="py-6">
              Encontre imoveis de leilao no portal mais completo do Brasil!
            </p>
            <button className="btn btn-primary" type="button">
              <Link to="/registration">Faça parte</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerRegister;
