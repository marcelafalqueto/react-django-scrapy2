import { Link } from "react-router-dom";
import React, { useEffect } from "react";

const Navbar = () => {
  // adicao de tema claro e escuro
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // salva no local stoage tema escolhido 
  useEffect(() => {
    const theme = localStorage.getItem("data-theme")
    setTheme(theme)
  }, [])

  return (
    <>
      <div className="navbar bg-base-300 rounded-box shadow-xl">
        <div className="flex-1 px-2 lg:flex-none">
          {" "}
          <Link to="/" className="btn btn-ghost normal-case text-xl ">
            HUNT UP
          </Link>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">

            {/* adicao de tema claro e escuro */}
            <label className="swap swap-rotate">
              <input onClick={toggleTheme} type="checkbox" className="toggle toggle-lg toggle-primary" />
            </label>

            <a className="btn btn-ghost rounded-btn">
              <Link to="/loginpage">Login</Link>
            </a>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Menu
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content fixed z-10 p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  {/* <Link to="/search">Busca</Link> */}
                </li>
                <li>
                  <Link to="/crawler">Crawler</Link>
                </li>
                <li>
                  <Link to="/profile">Perfil</Link>
                </li>
                <li>
                  <Link to="/notifications">Notificações</Link>
                </li>
                <li>
                  <Link to="/">Sair</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
