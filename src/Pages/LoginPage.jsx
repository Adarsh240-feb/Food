import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    alert("Logged in!");
    window.location.reload();
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "60px auto",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      padding: 32
    }}>
      <h2 style={{ color: "#ff8800", fontWeight: 800, marginBottom: 24 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 18,
            borderRadius: 8,
            border: "1px solid #eee",
            fontSize: "1.1rem"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 18,
            borderRadius: 8,
            border: "1px solid #eee",
            fontSize: "1.1rem"
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#ff8800",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.8rem 0",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;