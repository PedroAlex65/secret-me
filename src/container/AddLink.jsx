import { useState } from "react";
import { Container } from "./addLink";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AddLinks() {
  const [inputValue, setInputValue] = useState("https://leave-message/m/p41h90r3?s=2");

  function teste(){
    console.log(setInputValue(inputValue));
  }

  return (
    <Container className="">
      <div className="information-box">
        <h1>
          Compartilhe este link com seus amigos e colete Mensagens Anônimas.
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly
        />

        <CopyToClipboard text={inputValue}>
          <button onClick={teste}>Click to Copy</button>
        </CopyToClipboard>
        <a className="instagram">
          Add to Story
        </a>

        <a className="whatsapp">
          Add to Status
        </a>
        <a className="facebook">
          Share
        </a>
        <button className="check">Check Messages</button>
      </div>
    </Container>
  );
}

export default AddLinks;
