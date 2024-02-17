import styled from "styled-components";

export const ContainerFather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;

`;

export const MainContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.13);
  background: #fff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.23),
    0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`;

export const Texts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  h1 {
    color: #212529;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
  }

  h2 {
    margin-top: 10px;
    color: #6c757d;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    text-align: center;
  }
  .trace{
    width: 470px;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.10);


  }

  .about-information {
    color: #db7093;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
  .allow-notification {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
`;

export const IputsTexts = styled.form`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  h2 {
    color: #212529;
    font-size: 20px;
    line-height: 24px;
  }
  .input-nickName {
    margin-top: 5px;
    width: 378px;
    height: 36px;
    padding: 5px 12px 6px 12px;
    border: 2px solid #80bdff;
    box-shadow: 0px 0px 0px 3.2px rgba(0, 123, 255, 0.25);
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      border: 2px solid #007bff; /* Altere a cor do border ao passar o mouse */
      box-shadow: 0px 0px 0px 6px rgba(0, 123, 255, 0.25); /* Ajuste os valores do box-shadow ao passar o mouse */
    }
  }
  .btn {
    margin-top: 20px;
    width: 384px;
    height: 38px;
    padding: 7px 117.578px 8px 118px;
    justify-content: center;
    align-items: center;
    background-color: #db7093;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }
`;

export const InputCheckBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 10px;
  p {
    color: #212529;
    text-align: center;
    font-family: Roboto;
    font-size: 12px;
    line-height: 18px; /* 150% */
    width: 328px;
  }
`;
