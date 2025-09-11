# Déploiement BuilderLYs Studio

1. Cloner le projet
2. Configurer `.env`
3. Installer les dépendances
4. Build frontend : `npm run build`
5. Lancer Express et Next.js (`npm run start`)
6. (Optionnel) Docker : `docker compose up -d --build`
7. (Optionnel) Reverse proxy SSL avec Nginx/Certbot
8. Vérifier les accès sur les ports 3000/3001

Pour la base MySQL, créer la DB et adapter le `DATABASE_URL`.