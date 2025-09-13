#!/bin/bash
# Déploiement des apps BuilderLYs

# Build & run frontend
cd apps/web
docker build -f ../../docker/Dockerfile.web -t builderlys-web .
docker run -d --restart unless-stopped -p 8085:3000 --name builderlys_web builderlys-web

# Build & run backend
cd ../api
docker build -f ../../docker/Dockerfile.api -t builderlys-api .
docker run -d --restart unless-stopped -p 8086:8080 --name builderlys_api builderlys-api