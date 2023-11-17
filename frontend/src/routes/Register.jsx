import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SelectEstado } from "../components/CidadesEstados/SelectEstado";
import { SelectCidade } from "../components/CidadesEstados/SelectCidade";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { cpf } from "cpf-cnpj-validator";

const Register = () => {
  // checar cidade e estado
  const [selectedUf, setSelectedUf] = useState("");
  const [phone, setPhone] = useState("");

  // checar cpf
  const Schema = yup.object({
    CPF: yup
      .string()
      .required("Coloque seu CPF acima")
      .test((value) => cpf.isValid(value)),
  });

  // validar email

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      setError("Email invalido");
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
                <p className="py-6 text-xl">
                  Fique de olho nas oportunidades e salve seus imoveis favoritos
                  para não perde-los de vista!
                </p>
              </div>

              {/* formulario */}
              <form onSubmit={handleSubmit}>
                {/* nome  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nome Completo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Informe seu nome"
                    className="input input-bordered"
                  />
                </div>
                {/* validaçao de cpf  */}
                <Formik initialValues={{ CPF: "" }} validationSchema={Schema}>
                  <div className="form-control">
                    <span className="label-text mb-1 mt-3">CPF</span>
                    <Form>
                      <div>
                        <Field
                          className="input  mb-2 input-bordered"
                          name="CPF"
                          placeholder="Number CPF"
                        />
                        <ErrorMessage component="div" name="CPF" />
                      </div>
                    </Form>
                  </div>
                </Formik>
                {/* validaçao estado  */}
                <div className="form-control mb-3">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>

                  <SelectEstado onChange={setSelectedUf} />
                </div>{" "}
                <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>
                  {/* validaçao cidade  */}
                  <SelectCidade uf={selectedUf} />
                </div>{" "}
                {/* validaçao email  */}
                <div className="form-control mb-2">

                  <label className="label">
                    <span className="label-text">E-mail</span>
                  </label>

                  <input
                    placeholder="Digite seu e-mail"
                    className="input input-bordered"
                    id="message"
                    name="message"
                    value={email}
                    onChange={handleChange}
                  />
                </div>{" "}
                {/* validaçao telefone celular  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Telefone Celular</span>
                  </label>
                  <PhoneInput
                    defaultCountry="br"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>{" "}
                {/* ja possui acesso, va para login  */}
                <div className="form-control mt-5">
                  <span>
                    Já possui um acesso?
                    <Link to="/loginpage">
                      <u> Faça login</u>
                    </Link>{" "}
                  </span>
                </div>
                {/* botao registrar  */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Registrar
                  </button>
                </div>
                {error && <h2 style={{ color: "red" }}>{error}</h2>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
