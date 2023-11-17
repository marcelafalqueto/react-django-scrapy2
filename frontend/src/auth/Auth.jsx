import React from "react";
import Cookies from "js-cookie";

const Auth = () => {
  function gerenciarCookie(logado) {
    if (logado) {
      Cookies.set("admin-template-auth", logado, {
        expires: 7,
      });
    } else {
      Cookies.remove("admin-template-auth");
    }
  }

  return <></>;
};

export default Auth;
