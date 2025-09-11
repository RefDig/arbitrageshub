import { useEffect, useState } from 'react';

export default function MarketplacePage() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/marketplace/opportunities', { headers: { Authorization: 'Bearer FAKE_TOKEN' } })
      .then(res => res.json())
      .then(setOpportunities);
  }, []);

  return (
    <div>
      <h2>Opportunités</h2>
      <ul>
        {opportunities.map(o => (
          <li key={o.id}>{o.title} - {o.budget}€ ({o.company})</li>
        ))}
      </ul>
    </div>
  );
}