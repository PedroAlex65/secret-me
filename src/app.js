import styled from "styled-components";

// Nav
export const FatherItem = styled.header`
  max-width: 1920px;
  padding: 15px;
  margin: 0 auto;
  background-color: #db7093;
`;

export const Item = styled.header`
  display: flex;
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
  justify-content: center;
  align-items: center;
`;

export const Google = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 418px;
  height: 512px;
  background-color: #f2f2f2;
  border-radius: 10px;
  .information {
    h2 {
      text-align: center;
      color: #000;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
    }

    .trace-or {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      margin-top: 27px;
      .trace-right {
        background-color: #000;
        width: 50px;
        height: 1px;
      }
      p {
        font-family: "Roboto", sans-serif;
      }
      .trace-left {
        background-color: #000;
        width: 50px;
        height: 1px;
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
