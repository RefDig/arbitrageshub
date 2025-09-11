import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  async function login(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setToken(data.token || '');
  }

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={login}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Mot de passe" value={password} type="password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
      {token && <p>Token JWT : {token}</p>}
    </div>
  );
}