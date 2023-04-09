import React from "react";
const Register = () => {
  const handleChange = () => {};
  return (
    <div className="register-page">
      <h2 className="register-page-heading">Sign Up</h2>
      <form className="register-form">
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
          onChange={handleChange}
        />
        <button className="control" type="button">
          JOIN NOW
        </button>
      </form>
    </div>
  );
};

export default Register;
