import React from "react";
import Nav from "./container/Nav.jsx";
import LoginGoogle from "./container/LoginGoogle.jsx";
import SecretMessages from "./container/SecretMessages.jsx";

function App() {
  const [user, setUser] = React.useState({});
  const [loginVisible, setLoginVisible] = React.useState(true);

  return (
    <>
      <Nav loginVisible={loginVisible} setLoginVisible={setLoginVisible} />
      <LoginGoogle
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
        user={user}
        setUser={setUser}
      />
      <SecretMessages />
    </>
  );
}

export default App;
