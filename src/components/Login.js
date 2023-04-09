import React, { useState } from "react";
import axios from "axios";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lakukan permintaan POST ke API TMDb untuk autentikasi
    try {
      const response = await axios.post(
        "https://api.themoviedb.org/3/authentication/token/new",
        {
          username,
          password,
        }
      );

      // Dapatkan token dari respons API TMDb
      const { request_token } = response.data;

      // Lakukan proses autentikasi lebih lanjut atau alihkan ke halaman berikutnya
      // misalnya dengan menggunakan react-router-dom
      console.log("Token: ", request_token);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default FormLogin;
