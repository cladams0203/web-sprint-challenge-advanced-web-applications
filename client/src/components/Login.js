import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState("");

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Login Here</h2>
      <form>
        <input value={form} onChange={(e) => setForm(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
