import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardSearch from "../components/CardSearch";
import SearchBar from "../components/SearchBar";

const Search  = () => {

  return (
    <>
      <Navbar />
      <div className="min-h-[38vw] bg-base-300">
        <div className="sm:p-5">
          <div className="mx-auto card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <div className="sm:card-body">
              <div className="w-7/8 m-auto">
                <SearchBar />
                {/* grid com os cards mostrando resultados da busca  */}
                <div className="flex  flex-wrap flex-row justify-center">

                  <CardSearch />
                  <CardSearch />
                  <CardSearch />
                  <CardSearch />
                  <CardSearch />
                  <CardSearch />
                  <CardSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;

// class App extends React.Component {
//   state = { details: [] };

//   componentDidMount() {
//     let data;
//     axios
//       .get("http://localhost:8000/api/tasks/")
//       .then((res) => {
//         data = res.data;
//         this.setState({
//           details: data,
//         });
//       })
//       .catch((err) => {});
//   }
  
//   render() {
//     return (
//       <div>
//         <header>Data coming from django</header>
//         <hr></hr>
//         {this.state.details.map((output, id) => (
          
//           <div key={id}>
//             <div>
//               <h2> {output.title} </h2>
//               <h3>  </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
