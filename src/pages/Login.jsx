import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login} = useContext(AuthContext);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let {name, value} = e.target;
    setForm({
      ...form, 
      [name] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/products')
  }
  return (
    <form
    onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      <input
        data-cy="login-email"
        placeholder="enter email"
        type='email'
        name='email'
        onChange={handleChange}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />
      <input
        data-cy="login-password"
        type='password'
        name='password'
        placeholder="enter password"
        onChange={handleChange}
        style={{ marginTop: "5px", marginBottom: "15px" }}
      />
      <button
        data-cy="login-submit"
        type="submit"
        style={{ marginTop: "5px", marginBottom: "15px" }}
      >
        login
      </button>
    </form>
  );
};

export default Login;
