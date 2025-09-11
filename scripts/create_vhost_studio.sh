#!/bin/bash

cat <<EOF > /etc/apache2/conf.d/studio.builderlys.com.conf
<VirtualHost *:80>
    ServerName studio.builderlys.com
    ProxyPreserveHost On
    ProxyPass / http://localhost:3001/
    ProxyPassReverse / http://localhost:3001/
    ErrorLog /var/log/apache2/studio_error.log
    CustomLog /var/log/apache2/studio_access.log combined
</VirtualHost>
EOF

systemctl reload apache2