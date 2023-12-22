import {
  MainContainer,
  Texts,
  IputsTexts,
  InputCheckBox,
  ContainerFather,
} from "./secret-Messages";

function SecretMessages() {

  
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
        <IputsTexts className="inputs-links">
          <h2>Digite seu Nome-</h2>
          <input className="input-nickName" type="text" placeholder="Apelido" />
          <button>Crie seu Link💎</button>
          <InputCheckBox className="privacy-terms">
            <input type="checkbox" />
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
