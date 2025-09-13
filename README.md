# Déploiement du projet sur cPanel avec Git™ Version Control

## Prérequis
- Hébergement cPanel (builderlys.com ou studio.builderlys.com)
- Accès à Git™ Version Control via cPanel
- Certificat SSL activé sur le domaine

## Déploiement

1. **Cloner le dépôt sur cPanel**
   - Connectez-vous à cPanel
   - Ouvrez "Git™ Version Control"
   - Cliquez sur "Créer" et choisissez "Cloner un dépôt existant"
   - Entrez l'URL du dépôt GitHub : `https://github.com/RefDig/arbitrageshub.git`
   - Choisissez le dossier de destination (`public_html` ou autre)

2. **Mettre à jour le dépôt**
   - Depuis cPanel, allez dans "Git™ Version Control"
   - Sélectionnez le dépôt et cliquez sur "Pull" pour récupérer les dernières modifications

3. **Installer les dépendances**
   - Pour Node.js :  
     ```
     npm install
     ```
   - Pour PHP :  
     ```
     composer install
     ```

4. **Configurer l'application**
   - Renommez `.env.example` en `.env` et renseignez vos variables d'environnement

## Configuration SSL et redirection HTTPS

Ajoutez ou modifiez le fichier `.htaccess` comme suit :

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Support
Pour toute question, contactez l'administrateur ou consultez la documentation cPanel.