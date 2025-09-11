import { useState } from 'react';

export default function PaymentPage() {
  const [url, setUrl] = useState('');

  async function pay() {
    const res = await fetch('http://localhost:3001/payment/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer FAKE_TOKEN' },
      body: JSON.stringify({
        amount: 1000,
        currency: 'eur',
        success_url: 'http://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/payment/cancel'
      })
    });
    const data = await res.json();
    setUrl(data.url);
  }

  return (
    <div>
      <h2>Paiement Stripe</h2>
      <button onClick={pay}>Payer 10€</button>
      {url && <p><a href={url} target="_blank">Lien Stripe</a></p>}
    </div>
  );
}