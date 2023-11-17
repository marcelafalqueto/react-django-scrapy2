import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Notifications = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[38vw] bg-base-300">
        <div className="sm:p-5">
          <div className="mx-auto card w-full shadow-2xl bg-base-100">
            <div className="mx-auto card min-h-[20vw] w-[50%] m-5 ">
              <h1 className="text-5xl p-5">PERFIL</h1>

              <form onSubmit={handleSubmit}>
                <div className="p-5 text-4xl">
                  <span className="oi">Nome:</span>
                  <span className="oi"> pega da API</span>
                </div>
                <div className="p-5 text-4xl">
                  <span className="oi">CPF:</span>
                  <span className="oi"> pega da api</span>
                </div>
                {/* validaçao email  */}
                <div className="form-control  p-5 text-4xl flex flex-col lg:flex-row">
                  <span className="sm:mb-5 mr-5">E-mail: </span>
                  <input
                    placeholder="Digite seu e-mail"
                    className="input input-bordered "
                    id="message"
                    name="message"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                {/* VALIDAÇAO CELULAR  */}
                <div className="form-control p-5 text-4xl flex flex-col lg:flex-row">
                  <span className="sm:mb-5 mr-5">Telefone celular:</span>
                  <PhoneInput
                    defaultCountry="br"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
                {/* validaçao estado  */}
                <div className="md:w-[350px] p-3 ml-2 text-2xl">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>

                  <SelectEstado onChange={setSelectedUf} />
                </div>{" "}
                {/* validaçao cidade  */}
                <div className="md:w-[350px] p-3 ml-2 text-2xl">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>
                  <SelectCidade uf={selectedUf} />
                </div>{" "}
                {/* botao SALVAR  */}
                <div className="form-control p-5 text-2xl flex flex-row">
                  <button type="submit" className="btn btn-primary">
                    SALVAR
                  </button>
                </div>
                {error && <h2 style={{ color: "red" }}>{error}</h2>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Notifications;
