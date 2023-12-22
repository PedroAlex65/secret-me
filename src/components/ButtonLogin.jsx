import { InvalidTokenError, jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function ButtonLogin({ setUser }) {


  function handleCallbackResponse(response) {
    console.log("Encoded JWT" + response.credential);

    let userObject = jwtDecode(response.credential);
    console.log(userObject);

    setUser({userObject});
    document.getElementById("signInDiv").hidden = true;
    console.log("Login Efetuado");
  }


  
  // Feito
  useEffect(() => {
    // Global google
    window.google.accounts.id.initialize({
      client_id:
        "640670481882-92lc9hlba7u11g1k4jsi4qmmjophml4p.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "size",
      }
    );

    window.google.accounts.id.prompt();
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}

export default ButtonLogin;
