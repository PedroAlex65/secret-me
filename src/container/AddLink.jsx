import { Container } from "./addLink";

function AddLinks() {
  return (
    <Container className="">
      <div className="information-box">
        <h1>
          Compartilhe este link com seus amigos e colete Mensagens Anônimas.
        </h1>
        <input
          placeholder="https://leave-message/m/p41h90r3?s=2"
          type="text"
          name=""
          id=""
        />
        <button>Click to copy</button>
        <a href="#" className="instagram">
          Add to Story
        </a>

        <a href="#" className="whatsapp">
          Add to Status
        </a>
        <a href="#" className="facebook">
          Share
        </a>
        <button className="check">Check Messages</button>
      </div>
    </Container>
  );
}

export default AddLinks;
