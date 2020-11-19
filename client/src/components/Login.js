import React, { useState, useCallback } from "react";
import { useFetch } from "../utils/apiHook";
import { api } from "../utils/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({ username: "", password: "" });
  // const [api, data, error, loading] = useFetch("http://localhost:5000");
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api()
      .post("/api/login", form)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubblePage");
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} />
        <input name="password" value={form.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
