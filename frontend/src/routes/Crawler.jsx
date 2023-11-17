import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardSearch from "../components/CardSearch";
import SearchBar from "../components/SearchBar";
import axios from "axios";

class Crawler extends React.Component {
  state = { details: [] };

  componentDidMount() {

    axios
      .get("http://localhost:8000/api/tasks/")
      .then((res) => {
        this.setState({
          details: res.data,
        });
      })
      .catch((err) => {
        console.error("Erro ao fazer a requisição: ", err);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div>
          <div className="min-h-[38vw] bg-base-300">
            <div className="sm:p-5">
              <div className="mx-auto card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <div className="sm:card-body">
                  <div className="w-7/8 m-auto">
                    <SearchBar />
                    {/* grid com os cards mostrando resultados da busca  */}
                    <div className="flex  flex-wrap flex-row justify-center">
                      {this.state.details.map((output, id) => (
                        <div key={id}>
                          <div>
                            <CardSearch
                              auction_type={output.auction_type}
                              neighborhood={output.neighborhood}
                              address={output.address}
                              data_auction1={output.data_auction1}
                              initial_bid1={output.initial_bid1}
                              data_leilao2={output.data_leilao2}
                              initial_bid2={output.initial_bid2}
                              open_or_closed={output.open_or_closed}
                              link_image={output.link_image}
                              link_auction={output.link_auction}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3> </h3>
          {/* </div> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default Crawler;
