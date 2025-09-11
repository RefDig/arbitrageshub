#!/bin/bash

# Arrête en cas d’erreur
set -e

# 1. Variables
APP_DIR="/opt/builderlys"
REPO_URL="https://github.com/RefDig/arbitrageshub.git"
NODE_VERSION="18"
BACKEND_PORT=3001
FRONTEND_PORT=3000
DOMAIN="studio.mondomaine.com"

# 2. Installation Node.js (si pas déjà fait)
if ! command -v node > /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# 3. Clone ou update le projet
if [ ! -d "$APP_DIR" ]; then
  git clone $REPO_URL $APP_DIR
else
  cd $APP_DIR
  git pull
fi

# 4. Install deps
cd $APP_DIR/apps/api && npm install
cd $APP_DIR/apps/web && npm install

# 5. Build frontend
cd $APP_DIR/apps/web && npm run build

# 6. Lancement backend
pm2 delete builderlys-api || true
pm2 start npm --name "builderlys-api" --prefix $APP_DIR/apps/api -- run start

# 7. Lancement frontend
pm2 delete builderlys-web || true
pm2 start npm --name "builderlys-web" --prefix $APP_DIR/apps/web -- run start

# 8. Redémarrage Nginx (si besoin)
sudo systemctl reload nginx

echo "Déploiement terminé !"