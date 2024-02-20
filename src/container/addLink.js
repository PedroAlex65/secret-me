import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .information-box {
    width: 418px;
    height: 479px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    h1 {
      color: #000;
      font-size: 15px;
      font-weight: 500;
      max-width: 380px;
    }
    input {
      width: 380px;
      height: 40px;
      border: 2px solid #db7093;
      color: #6c757d;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
    }
    button {
      background-position: 100px;
      background-repeat: no-repeat;
      background-color: #6c757d;
      width: 380px;
      height: 40px;
      border: 1px solid #000;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover{
        opacity: 0.9;
        transition: .5s ease;
      }
      &:active{
        scale: .9.9;

      }
    }

  }
`;
