import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleEnter() {
    localStorage.setItem("username", username);
    navigate("/feed");
  }

  return (
    <div>
      <h1>Welcome to CodeLeap network!</h1>

      <input
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button disabled={!username} onClick={handleEnter}>
        ENTER
      </button>
    </div>
  );
}
