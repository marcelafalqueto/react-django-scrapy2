import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [dadosForm, setDadosForm] = useState({});

  const handleChange = (e) => {
    setDadosForm({
      ...dadosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/registrations/",
        dadosForm
      );
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Houve um erro na requisição:", error);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Cadastre-se</h1>

                {/* -----------login-----------  */}
                <div className="form-control mt-5">
                  <span>
                    Já possui um acesso?
                    <Link to="/loginpage">
                      <u> Faça login</u>
                    </Link>{" "}
                  </span>
                </div>
              </div>

              {/* -----------formulario--------- */}
              <form onSubmit={handleSubmit}>
                {/* ----------name----------  */}
                <div className="form-control">
                  <label className="label" htmlFor="name">
                    <span className="label-text">Nome Completo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Informe seu nome"
                    className="input input-bordered"
                    id="name"
                    name="name"
                    value={dadosForm.name}
                    onChange={handleChange}
                  />
                </div>
                {/* ----------cpf----------  */}
                <div className="form-control" >
                  <label className="label" htmlFor="cpf">
                    <span className="label-text">CPF</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Apenas numeros"
                    className="input input-bordered"
                    id="cpf"
                    name="cpf"
                    value={dadosForm.cpf}
                    onChange={handleChange}
                  />
                </div>
                {/* ----------cep----------  */}
                <div className="form-control" >
                  <label className="label" htmlFor="cep">
                    <span className="label-text">CEP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite no formato 12345-678"
                    className="input input-bordered"
                    id="cep"
                    name="cep"
                    value={dadosForm.cep}
                    onChange={handleChange}
                  />
                </div>
                {/* ----------telefone----------  */}
                <div className="form-control" >
                  <label className="label" htmlFor="cellphone">
                    <span className="label-text">Telefone celular</span>
                  </label>
                  <input
                    type="number"
                    placeholder="No formato (21) 98765-4321"
                    className="input input-bordered"
                    id="cellphone"
                    name="cellphone"
                    value={dadosForm.cellphone}
                    onChange={handleChange}
                  />
                </div>
                {/* ----------email----------  */}
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">E-mail</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="input input-bordered"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={dadosForm.email}
                    onChange={handleChange}
                  />
                </div>
                {/* ----------senha----------  */}
                <div className="form-control">
                  <label className="label" htmlFor="password">
                    <span className="label-text">Senha</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Coloque sua senha"
                    className="input input-bordered"
                    id="password"
                    name="password"
                    value={dadosForm.password}
                    onChange={handleChange}
                  />
                </div>
                {/* botao registrar  */}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Registration;
