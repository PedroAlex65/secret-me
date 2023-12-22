import { FatherItem, Item, ContainerButton, Button } from "./nav";
import LogoSecret from "../assets/logo-secret.svg";
import { useState } from "react";

function Nav({ setLoginVisible, user }) {

  const handleButtonClick = () => {
    // Configure um atraso de 1 minuto antes de alterar o estado
    setTimeout(() => {
      setLoginVisible(true);
    }, 2000);
  };
  return (
    <FatherItem>
      <Item>
        <img src={LogoSecret} alt="" />
        <ContainerButton>
          <Button onClick={handleButtonClick}>Login</Button>
        </ContainerButton>
      </Item>
    </FatherItem>
  );
}

export default Nav;
