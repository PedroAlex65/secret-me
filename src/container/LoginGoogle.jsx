import React from "react";
import { FormInput, Google, GoogleScreen } from "./LoginGoogle";

import ButtonLogin from "../components/ButtonLogin";

function LoginGoogle({ loginVisible, setLoginVisible }) {
  React.useEffect(() => {
    setLoginVisible(false);
  }, []);

  return (
    <GoogleScreen>
      {loginVisible && (
        <Google>
          <div className="information">
            <h2>CREATE ACCOUNT</h2>
            <ButtonLogin />
            <div className="trace-or">
              <div className="trace-left"></div>
              <p>or</p>
              <div className="trace-right"></div>
            </div>
          </div>
          <FormInput>
            <input type="text" placeholder="FULL NAME" />
            <input type="text" placeholder="EMAIL ADRESS" />
            <input type="text" placeholder="PASSWORD" />
          </FormInput>
        </Google>
      )}
    </GoogleScreen>
  );
}

export default LoginGoogle;
