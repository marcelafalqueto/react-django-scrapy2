import React from "react";

const AuctionsInfo = () => {
  return (
    <>
      {/* infos do leilao */}
      <div className="w-9/12 m-auto ">
        <div className="block1 flex flex-col lg:flex-row justify-center">
          <div className="info-escrita lg:w-[70%] w-full p-5 ">
            <h1 className="text-3xl pb-5">
              (Apartamento 60m2 - Bairro - Cidade - UF)
            </h1>
            <div className="bloco-detalhes flex flex-col lg:flex-row">
              <div className="bloco1 w-[50%]">
                <div className="loca pb-5">
                  <p className="font-bold">Localização</p>
                  <p>resposta api</p>
                </div>
                <div className="leilo  pb-5">
                  <p className="font-bold">Leiloeiro</p>
                  <p>resposta api</p>
                </div>
                <div className="proce  pb-5">
                  <p className="font-bold">Processo</p>
                  <p>resposta api</p>
                </div>
                <div className="controle  pb-5">
                  <p className="font-bold">Controle</p>
                  <p>resposta api</p>
                </div>
              </div>
              <div className="bloco2 w-[50%]">
                <div className="autor  pb-5">
                  <p className="font-bold">Autor</p>
                  <p>resposta api</p>
                </div>
                <div className="reu  pb-5">
                  <p className="font-bold">Reu</p>
                  <p>resposta api</p>
                </div>
                <div className="vara  pb-5">
                  <p className="font-bold">Vara</p>
                  <p>resposta api</p>
                </div>
                <div className="forum  pb-5">
                  <p className="font-bold">Forum</p>
                  <p>resposta api</p>
                </div>
              </div>
            </div>
          </div>
          {/* bloco com preços de 1 e 2 praça */}
          <div className="info-precos lg:w-[30%] w-full bg-gray-200 p-5">
            <p className="pb-5">
              1ª Praça: <span>data e hora vindo da api</span>
            </p>
            <p className="pb-5">R$180.695,53</p>
            <p className="pb-5">
              2ª Praça: <span>data e hora vindo da api</span>
            </p>
            <p className="pb-5">R$590.695,53</p>
            <p className="pb-5">Leilao termina em </p>
            <div className="contador flex flex-row">
              <div className="p-2">
                <span>x</span>
                <p>Horas</p>
              </div>
              <div className="p-2">
                <span>x</span>
                <p>Minutos</p>
              </div>
              <div className="p-2">
                <span>x</span>
                <p>Segundos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bloco com documentos e transcriçao de matricula  */}
      <div className="w-9/12 m-auto ">
        <div className="block1 flex flex-col-reverse lg:flex-row justify-center">
          <div className="docs-download lg:w-[70%] w-full bg-gray-200 bg-gray-200 p-5">
            <p className="text-3xl">descriçao e transciçao da matricula</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
          <div className="docs-download lg:w-[30%] w-full p-5">
            <input
              type="button"
              value="EDITAL"
              className="btn btn-lg text-3xl m-5"
            />

            <input
              type="button"
              value="MATRICULA"
              className="btn btn-lg text-3xl m-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionsInfo;
