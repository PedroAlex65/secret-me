import styled from "styled-components";

import Facebook from "../assets/messenger.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Instagram from "../assets/instagram.svg";
import Copy from "../assets/copy.svg";
import Check from "../assets/check.svg";

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
      background-image: url(${Copy});
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
    }

    .instagram {
      background-position: 100px;
      background-image: url(${Instagram});
      background-repeat: no-repeat;
      text-align: center;
      background-color: #dd2a7b;
      width: 380px;
      height: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .whatsapp {
      background-position: 100px;

      background-image: url(${Whatsapp});
      background-repeat: no-repeat;
      text-align: center;
      background-color: #39e11d;
      width: 380px;
      height: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .facebook {
      background-position: 130px;
      background-image: url(${Facebook});
      background-repeat: no-repeat;
      text-align: center;
      background-color: #4950f3;
      width: 380px;
      height: 40px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .check {
      background-image: url(${Check});
      background-repeat: no-repeat;
      align-items: center;
      width: 300px;
      height: 40px;
      background-color: #49dff3;
      color: #6c757d;
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
