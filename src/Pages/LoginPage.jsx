import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  // Signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    alert("Logged in!");
    window.location.reload();
  };

  const handleSignup = e => {
    e.preventDefault();
    if (signupPassword !== signupConfirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created!");
    setShowSignup(false);
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirm("");
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
      <h2 style={{ color: "#ff8800", fontWeight: 800, marginBottom: 24 }}>
        {showSignup ? "Sign Up" : "Login"}
      </h2>
      {!showSignup ? (
        <form onSubmit={handleLogin}>
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
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <span style={{ color: "#888" }}>Don't have an account? </span>
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                color: "#ff8800",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "1rem"
              }}
              onClick={() => setShowSignup(true)}
            >
              Sign Up
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            required
            value={signupEmail}
            onChange={e => setSignupEmail(e.target.value)}
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
            value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}
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
            placeholder="Confirm Password"
            required
            value={signupConfirm}
            onChange={e => setSignupConfirm(e.target.value)}
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
            Sign Up
          </button>
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <span style={{ color: "#888" }}>Already have an account? </span>
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                color: "#ff8800",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                fontSize: "1rem"
              }}
              onClick={() => setShowSignup(false)}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;