import React from "react";

const CardSearch = ({
  auction_type,
  neighborhood,
  address,
  data_auction1,
  initial_bid1,
  data_leilao2,
  initial_bid2,
  open_or_closed,
  link_image,
  link_auction,
}) => {
  return (
    <>
      {/* <div className="flex  flex-wrap flex-row justify-center">
        <div className="max-w-sm  m-2 bg-base-100 shadow-xl">
          <img className="max-h-[240px]" src={link_image} />
          <div className="card-body">
            <h1 className="card-title  font-bold">{auction_type}</h1>
            <hr />
            <p className="">{neighborhood}</p>
            <p className="">{address}</p>
            <hr />
            <div className="flex">
              <p className="">Data 1° leilão: </p>
              <p className="">{data_auction1}</p>
            </div>
            <div className="flex">
              <p className=" ">Lance inicial: </p>
              <p className=" ">{initial_bid1}</p>
            </div>
            <div className="flex">
              <p className="">Data 2° leilão: </p>
              <p className="">{data_leilao2}</p>
            </div>
            <div className="flex">
              <p className="">Lance inicial: </p>
              <p className="">{initial_bid2}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href={link_auction}>Ver detalhes</a>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="card w-96 bg-base-100 shadow-xl  m-5 ">
        <figure className="bg-cover">
          <img src={link_image} />
        </figure>
        <div className="card-body box-border p-5 max-h-[450px]">
          <h2 className="card-title">{auction_type}</h2>

          <hr />
          <p className="">{neighborhood}</p>
          <p className="">{address}</p>
          <hr />
          <div className="flex">
            <p className="">Data 1° leilão: </p>
            <p className="">{data_auction1}</p>
          </div>
          <div className="flex">
            <p className=" ">Lance inicial: </p>
            <p className=" ">{initial_bid1}</p>
          </div>
          <div className="flex">
            <p className="">Data 2° leilão: </p>
            <p className="">{data_leilao2}</p>
          </div>
          <div className="flex">
            <p className="">Lance inicial: </p>
            <p className="">{initial_bid2}</p>
          </div>
          {/* <p className="text-green-500">{open_or_closed}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href={link_auction}>Ver detalhes</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSearch;
