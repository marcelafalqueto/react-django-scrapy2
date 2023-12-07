import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const userData = {
        email: email,
        password: password
    };

    // Chamar a função que faz a requisição POST
    login(userData);
};


  const login = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8000/authentication/', userData, {
          headers: {
              'Content-Type': 'application/json'
          }
      });
      console.log(response.data);
    } catch (error) {      console.error(error.response.data);    }
  };

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
                  <Link to="/registration">
                    <u> Cadastre-se</u>
                  </Link>{" "}
                </span>
                {/* ----------email----------  */}
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text">E-mail</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Seu e-mail"
                      className="input input-bordered"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* ----------botao----------  */}
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
