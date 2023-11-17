import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Bem vindo a Hunt Up!</h1>
            <p className="py-6 text-3xl">Um produto Inov Juris</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <span children="">
                  Não possui um acesso?
                  <Link to="/register">
                    <u> Cadastre-se</u>
                  </Link>{" "}
                </span>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    Receber chave por email
                  </button>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chave de acesso</span>
                </label>
                <input
                  type="text"
                  placeholder="chave"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
