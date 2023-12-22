import styled from "styled-components";

export const GoogleScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:  translate(-50%, -50%);
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
