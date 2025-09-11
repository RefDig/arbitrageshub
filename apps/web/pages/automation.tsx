import { useEffect, useState } from 'react';

export default function AutomationPage() {
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/automation/workflows', { headers: { Authorization: 'Bearer FAKE_TOKEN' } })
      .then(res => res.json())
      .then(setWorkflows);
  }, []);

  return (
    <div>
      <h2>Workflows</h2>
      <ul>
        {workflows.map(w => (
          <li key={w.id}>{w.name}</li>
        ))}
      </ul>
    </div>
  );
}