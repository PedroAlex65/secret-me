import React from "react";
import SecretMessages from "./container/SecretMessages.jsx";
import Footer from "./container/Footer.jsx";
import {
  FatherItem,
  Item,
  ContainerButton,
  Button,
  FormInput,
  Google,
  GoogleScreen,
} from "./app.js";

import LogoSecret from "./assets/logo-secret.svg";
import { InvalidTokenError, jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = React.useState({});
  const [clickButton, setClickButton] = React.useState(false);
  const [renderGoogleButton, setRenderGoogleButton] = React.useState(false);
const [secretMessageHidden, setSecretMessageHidden] = React.useState(true)

  // Função do botão de login

  // const [issGoogle, setIssGoogle] = React.useState();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT" + response.credential);
    let userObject = jwtDecode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    console.log(userObject);
    console.log("Login efetuado");
    setClickButton(false)
    setSecretMessageHidden(true)
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

  function habdleCLickButton() {
    setClickButton(true);
    setRenderGoogleButton(true);
    setSecretMessageHidden(false)
  }

  return (
    <>
      <FatherItem>
        <Item>
          <img src={LogoSecret} alt="" />
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
              <Button onClick={habdleCLickButton}>Login</Button>
            )}
          </ContainerButton>
        </Item>
      </FatherItem>

      {/* Login google */}
      {clickButton && (
        <GoogleScreen>
          <Google>
            <div className="information">
              <h2>CREATE ACCOUNT</h2>
              <div id="signInDiv"></div>
              <div className="trace-or">
                <div className="trace-left"></div>
                <p>or</p>
                <div className="trace-right"></div>
              </div>
            </div>
            <FormInput>
              <input type="text" placeholder="FULL NAME" />
              <input type="text" placeholder="EMAIL ADRESS" />
              <input type="text" placeholder="PASSWORD" />
            </FormInput>
          </Google>
        </GoogleScreen>
      )}

      {/* Fim Login google */}

      <SecretMessages secretMessageHidden={secretMessageHidden} setSecretMessageHidden={setSecretMessageHidden} />
      <Footer />
    </>
  );
}

export default App;
