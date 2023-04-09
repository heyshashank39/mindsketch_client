import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <h2 className="login-page-heading">Login</h2>
      <form className="login-form">
        <div className="username">
          <input
            autoComplete="false"
            spellCheck="false"
            className="control"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          name="password"
          spellCheck="false"
          className="control"
          type="password"
          placeholder="Password"
        />
        <button className="control" type="button">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
