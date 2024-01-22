import React from "react";
import SecretMessages from "./container/SecretMessages.jsx";
import Footer from "./container/Footer.jsx";
import {
  FatherItem,
  Item,
  ContainerButton,
  Button,
  GoogleScreen,
} from "./app.js";

import logoSecret from "./assets/logo-secret.svg";
import logoPerson from "./assets/person.svg";
import { InvalidTokenError, jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = React.useState(null);

  const [clickButton, setClickButton] = React.useState(false);

  const [renderGoogleButton, setRenderGoogleButton] = React.useState(!true);

  const [local, setLoca] = React.useState();

  //ssssssssssssssssssssssssssssssssssss

  function handleCallbackResponse(response) {
    let userObject = jwtDecode(response.credential);

    localStorage.setItem("acessToken", response.credential);

    setUser(userObject);
    console.log(userObject);
    document.getElementById("signInDiv").hidden = true;
    console.log("Login efetuado");
    setClickButton(false);
  }
  const storedToken = localStorage.getItem("accessToken");

  if (storedToken) {
    try {
      const userObject = jwtDecode(storedToken);
      setUser(userObject);
      console.log('');
    } catch (error) {
      localStorage.removeItem("accessToken");
      console.error("Erro ao decodificar o token", error);
    }
  }
  // Feito
  React.useEffect(() => {
    // Global google

    if (renderGoogleButton) {
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
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {
          theme: "outline",
          size: "size",
        }
      );
    }
  }, [renderGoogleButton]);
  // Fim da função do botão de login

  function handleCLickButton() {
    setClickButton(true);
    setRenderGoogleButton(true);
  }

  return (
    <div className="">
      <FatherItem>
        <Item>
          <img src={logoSecret} alt="" />
          <ContainerButton>
            {user && user.name ? (
              <div className="container-user">
                <div className="data-users">
                  <img src={user.picture} alt="" />
                  <h3>{user.name}</h3>
                </div>

                <Button>Logout</Button>
              </div>
            ) : (
              <Button onClick={handleCLickButton}>Login</Button>
            )}
          </ContainerButton>
        </Item>
      </FatherItem>

      {/* Login google */}
      {clickButton && (
        <GoogleScreen>
          <div className="information">
            <div className="box-login">
              <h2>Login</h2>
              <form action="">
                <label className="email" htmlFor="">
                  Email
                  <input type="text" placeholder="EXEMPLO@GMAIL.COM" />
                </label>
                <label className="password" htmlFor="">
                  Senha
                  <input type="password" placeholder="******" />
                </label>
                <label className="check" htmlFor="">
                  <input type="checkbox" />
                  Lembrar de min
                </label>
                <button>Entrar</button>
                <a href="">Esqueceu senha ?</a>
                <div className="google-Button">
                  <p>Ou tente</p>
                  <div id="signInDiv"></div>
                </div>
              </form>
            </div>
            <div className="person">
              <img src={logoPerson} alt="" />
            </div>
          </div>
        </GoogleScreen>
      )}

      {/* Fim Login google */}

      <SecretMessages clickButton={clickButton} setUser={setUser} user={user} />
      <Footer />
    </div>
  );
}

export default App;
