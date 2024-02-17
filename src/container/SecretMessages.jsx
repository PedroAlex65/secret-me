import { useState } from "react";
import {
  MainContainer,
  Texts,
  IputsTexts,
  InputCheckBox,
  ContainerFather,
} from "./secret-Messages";
import { NavLink, useNavigate } from "react-router-dom";

function SecretMessages({ user, setUser }) {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const mensagemPadrao = "Por favor, marque o checkbox antes de prosseguir.";

  const [isChecked, setChecked] = useState(false);

  const linkGenerated = `${"https://leave-message/m"}`;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleClick() {
    if (isChecked) {
      if (localStorage.getItem("accessToken")) {
        console.log("Esse é o token");
        navigate("/createLink");
      } else {
      return ""
      }
      console.log("Input Tem Valor");
    } else {
      console.log("Input Sem valor");
    }
  }

  return (
    <ContainerFather>
      <MainContainer>
        <Texts className="texts">
          <h1>
            Mensagens Secretas <br /> 😍
          </h1>
          <h2>
            Obtenha feedback anônimo de seus amigos, colegas de trabalho e fãs.
          </h2>
          <div className="trace"></div>
          <p className="about-information">
            Você nunca sabe quem enviou uma mensagem para você!🔮
          </p>
          <br />
          <p className="allow-notification">
            Por favor, permita receber notificações
          </p>
        </Texts>
        <IputsTexts onSubmit={handleSubmit} className="inputs-links">
          <h2>Digite seu Nome-</h2>
          <input
            oninvalid="this.setCustomValidity('Enter User Name Here')"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="input-nickName"
            type="text"
            placeholder="@Apelido"
            required
          />

          <button className="btn" onClick={handleClick}>
            Crie seu Link💎
          </button>

          <InputCheckBox className="privacy-terms">
            <input
              onInvalid={(e) =>
                e.target.setCustomValidity("Your custom message")
              }
              type="checkbox"
              onChange={() => setChecked(!isChecked)}
              required
              title="Marque a porra do checkbox"
            />
            <p>
              {" "}
              Você concorda com a Política de Privacidade e os Termos e
              Condições do nosso site.
            </p>
          </InputCheckBox>
        </IputsTexts>
      </MainContainer>
    </ContainerFather>
  );
}

export default SecretMessages;