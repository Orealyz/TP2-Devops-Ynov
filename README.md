# WIK-DPS-TP02

Pour démarrer le projet, il faut:
```
git clone git@github.com:Orealyz/TP2-Devops-Ynov.git
```

Se rendre dans le dossier api:
```
cd /api
```

Pour la première partie du TP build l'image:
```
docker build -t api-tp2 .
```
```
docker run -d -p 3000:3000 --name api-container api-tp2
```

Pour la deuxième partie du TP build l'image:
```
docker build -f Dockerfile2 -t api-tp2-multi .
```
```
docker run -d -p 3000:3000 --name api-container api-tp2-multi
```
Enjoy :)