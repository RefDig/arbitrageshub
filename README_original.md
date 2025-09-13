# BuilderLYs – Plateforme SaaS pour les talents des quartiers populaires

## 🧩 Présentation

BuilderLYs est une plateforme SaaS qui structure, valorise et connecte les talents techniques issus des quartiers populaires.
Elle propose :
- Un site vitrine pour la présentation, la commercialisation et l’espace membre
- Un studio collaboratif multi-utilisateur, générateur de site web/app, outils d’automatisation low-code, modules de formation et mise en relation économique

---

## ⚙️ Architecture du projet

Monorepo :

```plaintext
apps/
  web/     # Frontend (site vitrine, espace membre, paiement)
  api/     # Backend Node.js (Studio SaaS, auth, automation, etc.)
docker/
  Dockerfile.web
  Dockerfile.api
scripts/
  deploy.sh
  setup_ssl.sh
packages/
  auth/
  generator/
  automation/
  training/
  marketplace/
.env.example
DEPLOY.md
README.md
```

---

## 🚀 Installation & Déploiement

### Prérequis
- VPS AlmaLinux 8.10 avec Docker
- Apache 2.4.x (reverse proxy SSL)
- MySQL 8.x
- Certbot v5+ (SSL)
- Accès root

### Déploiement rapide

```bash
git clone https://github.com/RefDig/arbitrageshub.git
cd arbitrageshub
cp .env.example .env
bash scripts/deploy.sh
```
*Configurez vos variables dans `.env` avant le lancement.*

### SSL
Utilisez Certbot :
```bash
bash scripts/setup_ssl.sh
```

---

## 🛠 Modules fonctionnels

- Authentification & rôles (JWT, OAuth)
- Studio collaboratif (création de contenus)
- Générateur site web/app (GPT, template engine)
- Automatisation low-code (workflows)
- Modules de formation (quizz, tracking)
- Mise en relation économique (matching, API marketplace)

---

## 🔒 Sécurité & bonnes pratiques

- **Ne jamais versionner le fichier `.env` réel**
- Utilisez `.env.example` pour les variables attendues
- Mettez à jour régulièrement vos dépendances
- Protégez l’accès SSH et surveillez les logs
- Utilisez des branches pour chaque fonctionnalité

---

## 🤝 Contribution

Toute aide est bienvenue !  
- Forkez le projet
- Créez une branche feature/ma-fonction
- Proposez une Pull Request
- Décrivez clairement vos changements

---

## 📚 Documentation

- [DEPLOY.md](DEPLOY.md) : installation & déploiement
- [docs/](docs/) : (à créer) documentation technique et API

---

## 📮 Contact & Support

Pour toute question, contactez : refdig@builderlys.com