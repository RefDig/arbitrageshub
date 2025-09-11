import { useEffect, useState } from 'react';

export default function TrainingPage() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/training/modules', { headers: { Authorization: 'Bearer FAKE_TOKEN' } })
      .then(res => res.json())
      .then(setModules);
  }, []);

  return (
    <div>
      <h2>Modules de formation</h2>
      <ul>
        {modules.map(m => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}