import styled from "styled-components";
import Logo from "./assets/input-email.svg";
import Senha from "./assets/input-olho.svg";
// Nav
export const FatherItem = styled.header`
  background-color: #db7093;
  padding: 15px;
`;

export const Item = styled.header`
  display: flex;
  max-width: 1980px;
  margin: 0 auto;
  justify-content: space-between;
  color: #000;
`;
export const ContainerButton = styled.div`
  display: flex;
  gap: 12px;

  .container-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 67px;

    .data-users {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      h3 {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
`;
export const Button = styled.button`
  display: flex;
  width: 151px;
  height: 38px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

// Login Google

export const GoogleScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;

  .information {
    width: 864px;
    height: 512px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ff4081;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 96px;
    .box-login {
      h2 {
        color: #000;
        font-size: 50px;
        font-weight: 700;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 22px;
        .email {
          display: flex;
          flex-direction: column;
          font-size: 20px;
          font-weight: 700;
          input {
            width: 276px;
            height: 41px;
            background: #fff;
            border: 1px solid #a9a9a9;
            border-radius: 8px;
            background-image: url(${Logo});
            background-repeat: no-repeat;
            background-position: 10px center;
            padding-left: 40px;
            box-sizing: border-box;
            font-size: 10px;
          }
        }
        .password {
          display: flex;
          flex-direction: column;
          font-size: 20px;
          font-weight: 700;

          input {
            width: 276px;
            height: 41px;
            background: #fff;
            border: 1px solid #a9a9a9;
            border-radius: 8px;
            background-image: url(${Senha});
            background-repeat: no-repeat;
            background-position: 10px center;
            padding-left: 40px;
            box-sizing: border-box;
            font-size: 15px;
          }
        }
        .check {
          display: flex;
          gap: 5px;
          color: #d9d9d9;
          align-items: center;
          input {
            width: 13px;
            height: 13px;
            background: #fff;
            border: 1px solid #a9a9a9;
            border-radius: 8px;
          }
        }
        button {
          width: 271px;
          height: 41px;
          border: none;
          background-color: #ff4081;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
        }
        a {
          color: #a9a9a9;
          font-size: 13px;
          text-align: end;
        }
        .google-Button{
          display: flex;
          align-items: center;
          gap: 5px;
          p{
            font-size: 13px;
            color: #ff4081;

          }
          #signInDiv{
            width: 220px;
          }
        }
      }
    }
  }
`;

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 31px;

  input {
    width: 220px;
    height: 42px;
    background-color: #d9d9d9;
    color: #000;
    border-radius: 10px;
    border: none;
  }

  input::placeholder {
    text-indent: 16px;
    color: #000;
  }
`;
