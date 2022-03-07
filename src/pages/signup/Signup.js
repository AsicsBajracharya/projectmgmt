import React, { useEffect, useState } from "react"
//styles
import "./signup.css"
function Signup() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [displayName, setDisplayName] = useState()
  const [thumbnail, setThumbnail] = useState()
  return (
    <form className="auth-form">
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          name=""
          id=""
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          name=""
          id=""
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
          name=""
          id=""
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.value)}
          value={thumbnail}
          required
          name=""
          id=""
        />
      </label>
      <button className="btn">Sign up</button>
    </form>
  )
}

export default Signup
