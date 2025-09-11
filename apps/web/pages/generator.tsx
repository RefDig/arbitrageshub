import { useState } from 'react';

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [siteCode, setSiteCode] = useState('');

  async function generate(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/generator/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer FAKE_TOKEN' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setSiteCode(data.siteCode);
  }

  return (
    <div>
      <h2>Générateur de site/app</h2>
      <form onSubmit={generate}>
        <input placeholder="Prompt" value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button type="submit">Générer</button>
      </form>
      {siteCode && <pre>{siteCode}</pre>}
    </div>
  );
}