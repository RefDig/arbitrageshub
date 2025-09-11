import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BuilderLYs Studio</title>
      </Head>
      <main>
        <h1>Bienvenue sur BuilderLYs Studio</h1>
        <nav>
          <ul>
            <li><a href="/auth">Authentification</a></li>
            <li><a href="/automation">Automatisation</a></li>
            <li><a href="/generator">Générateur</a></li>
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/payment">Paiement</a></li>
            <li><a href="/training">Formation</a></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}