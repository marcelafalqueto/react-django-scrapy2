import "./App.css";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";



function App() {
  return (
    <div className="App">

      <Outlet />

    </div>
  );
}

export default App;
