import styled from "styled-components";

export const Rodape = styled.footer`
  background-color: #db7093;
  width: 100vw;
  position: absolute;
  bottom: 1px;

  .container {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 73px;
    padding: 15px;
    li {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
