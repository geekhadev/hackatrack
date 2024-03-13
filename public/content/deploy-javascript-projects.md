---
title: 'Despliegue de proyectos JavaScript'
dateString: '13 Enero 2024'
date: '2024-01-13'
excerpt: 'Despliega proyectos en servidores como AWS, Digital Ocean, Netlify, Vercel ...'
cover: '/tracks/deploy-javascript-projects.png'
deploy: ''
github: ''
youtube: ''
authorName: '@geekhadev'
authorAvatar: 'https://avatars.githubusercontent.com/u/499907?v=4'
authorGithub: 'https://github.com/geekhadev'
status: 'published'
---

### Introducción

<br />

### Requisitos

- Crear una cuenta en [AWS](https://aws.amazon.com/es/).
- Tener una copia de los repositorios de ejemplo en su github [nextjs-example-app](https://github.com/hackaboss-workshops-irwing/nextjs-example-app) y [express-example-api](https://github.com/hackaboss-workshops-irwing/express-example-api).

<br />

### Estructura de los proyectos a desplegar

***La app*** será un proyecto FrontEnd de [Next.js](https://nextjs.org/) que lista una serie de datos en una única página, estos datos se obtienen del proyecto API.

```
app/
  ├── node_modules/
  ├── public/
  │   ├── next.svg
  │   └── vercel.svg
  ├── src/
  │   └── app/
  │       ├── page.js
  │       ├── layout.js
  │       ├── global.css
  │       └── favicon.ico
  ├── .eslintrc.json
  ├── .gitignore
  ├── jsconfig.json
  ├── next.config.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── tailwind.config.js
  └── README.md
```

***El API*** será un proyecto BackEnd de [Node.js](https://nodejs.org/en) con [Express](https://expressjs.com/) que devuelve una serie de datos en formato JSON.

```
api/
  ├── node_modules/
  ├── index.js
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```

> Nota no es necesario explicar la estructura de los proyectos, solo es para que se tenga una idea de como se verán los proyectos.

<br />

### EC2 (Elastic Compute Cloud) de AWS

#### 1 - Configurando una instancia EC2

- Crea una cuenta en AWS si aún no tienes una.
- Inicia sesión en AWS Management Console y ve a la sección de EC2.
- Lanza una nueva instancia EC2:
    - Elige el nombre
    - Elige el SO (Ubuntu 22.04 LTS)
    - Elige el tipo de instancia (t2.medium)
    - Crear un par de claves de acceso (descargar en un lugar seguro)
    - Crear un grupo de seguridad (habilitar ssh, http y https) acceso desde cualquier lugar
    - Añade almacenamiento si es necesario
    - Lanzar la instancia

Solo queda tomar un café ☕ y esperar a que la instancia inicie correctamente.

> Nota: esta configuración puede variar dependiendo de la región de AWS que se use, de los instancias disponibles y de las necesidades que requiera para las pruebas. Nosotros hemos probado con estas. Para complementar, no recomiendo la capa gratuita t2.micro ya que es muy limitada y no permite hacer muchas pruebas es muy lenta para hacer los builds.

#### 2 - Configurando un puerto para el API

- Habilitar el puerto 4000 en el grupo de seguridad de la instancia EC2.
    - En la consola de AWS, ve a la sección de EC2.
    - Accede a los detalles de la instancia
    - En la sección de seguridad, haz clic en el grupo de seguridad
    - Edita las reglas de entrada
    - Añade una nueva regla de entrada
    - Elige el tipo (TCP personalizado)
    - Elige el puerto (4000)
    - Elige el origen (0.0.0.0/0) para acceso desde cualquier lugar
    - Guardar las reglas

#### 3 - Conectando a la instancia

Al crear la instancia se descargó un par de claves de acceso, estas claves son las que usaremos para conectarnos por SSH.

> También hay otras formas de conexión como por ejemplo desde la consola de AWS, pero en este caso usaremos SSH ya que es la forma más común.

Cambiar los permisos de la clave privada.
```bash
chmod 400 your-key.pem
```

Conéctate a la instancia usando SSH.
```bash
ssh -i your-key.pem ubuntu@your-public-ip-ec2
```

#### 4 - Preparando el entorno

Ya que tenemos un servidor en funcionamiento debemos preparar el entorno para poder desplegar los proyectos. Esto incluye:

##### - Preparando el SO

Actualiza el sistema operativo
```bash
sudo apt-get update && sudo apt-get upgrade -y
```

##### - Preparando Node.js

Instala Node.js
```bash
sudo apt-get install -y nodejs
```

[Instala npm]('#') para gestionar los paquetes
```bash
sudo apt-get install -y npm
```

[Instala NVM]('#') para poder gestionar las versiones de Node.js
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Configurar variables de entorno
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Instala node v18
```bash
nvm install 18
```

Selecciona la versión de node a usar
```bash
nvm use 18
```

Instalar nodemon (opcional - para probar cambios en tiempo real)
```bash
npm install -g nodemon
```

Instalar pm2 (opcional - para correr procesos en segundo plano)
```bash
npm install -g pm2
```

Configurar pm2 para que se inicie con el sistema
```bash
pm2 startup
```

Configurar los enlaces simbólicos
```bash
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/pm2" "/usr/local/bin/pm2"
```

##### - Preparando la base de datos (MySQL)

Install [MySQL](#)
```bash
sudo apt-get install mysql-server
sudo systemctl start mysql.service
```

Configurar parámetros de seguridad de MySQL
```bash
sudo mysql_secure_installation
sudo systemctl restart mysql.service
```

Crear la base de datos
```bash
sudo mysql -u root -p
```

Crear el usuario de la base de datos
```sql
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';
```

Cambiar la contraseña del usuario de la base de datos
```sql
ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass';
```

Darle permisos al usuario de la base de datos
```sql
GRANT ALL PRIVILEGES ON user.* TO 'user'@'localhost';
```

Crear la base de datos
```sql
CREATE DATABASE db;
```

Seleccione la base de datos.
```sql
USE db;
```

Crear una tabla llamada datos.
```sql
CREATE TABLE persons (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
```

Insertar algunos registros en la tabla.
```sql
INSERT INTO persons (first_name, last_name) VALUES ('John', 'Doe');
INSERT INTO persons (first_name, last_name) VALUES ('Peter', 'Parker');
INSERT INTO persons (first_name, last_name) VALUES ('Bruce', 'Wayne');
```

Salir de MySQL.
```sql
exit
```

##### - Preparando el servidor web (Nginx)

Instalar Nginx.
```bash
sudo apt-get install -y nginx
```

Eliminar el archivo default y crear un nuevo archivo de configuración.
```bash
sudo rm /etc/nginx/sites-available/default
sudo rm /etc/nginx/sites-enabled/default
sudo nano /etc/nginx/sites-available/default
```

Configurar el archivo default.
```
server {
    listen 80;
    server_name _;

    location / {
        root /home/ubuntu/app/nextjs-example-app/build;
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;        
    }
}
```

Crear un enlace simbólico.
```bash
sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
```

Reiniciar Nginx.
```bash
sudo systemctl restart nginx
```

Asignar el usuario www-data al grupo de ubuntu.
```bash
sudo gpasswd -a www-data ubuntu
```

> Nota: en este punto deberíamos poder acceder al servidor web desde el navegador, pero como aún no hemos desplegado el proyecto APP Web, no veremos nada, pero si veremos un error en la consola del navegador.

##### - Preparando GIT

[Instala git]('https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-20-04') para poder clonar los proyectos
```bash
sudo apt-get install git
```

Configurar el nombre de usuario y el correo electrónico de git
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@domain.com"
```

Crear llave SSH para sincronizar con GitHub
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@domain.com"
```

Copiar la llave pública
```bash
cat ~/.ssh/id_rsa.pub
```

Agregar la llave [SSH a GitHub]('https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account')
  - En GitHub, haz clic en tu foto de perfil y luego en Configuración.
  - En el panel de la izquierda, haz clic en Llaves SSH y GPG.
  - Haz clic en Nueva llave SSH o Agregar llave SSH.
  - En el campo "Título", añade una etiqueta descriptiva para la nueva clave.
  - Pega tu clave en el campo "Clave".
  - Haz clic en Agregar llave SSH.
  - Confirma la acción escribiendo tu contraseña de GitHub.

<br />

### Instalando el API

#### 1 - Clonar el proyecto

Crear una carpeta para el proyecto
```bash
cd /home/ubuntu && sudo mkdir app && cd app
```

Clonar el proyecto
```bash
git clone git@github.com:hackaboss-workshops-irwing/express-example-api.git
cd express-example-api
```

Habilitar el .env
```bash
cp .env.example .env
```

#### 2 - Instalar las dependencias

```bash
npm install
```

#### 3 - Correr el proceso de Node.js

Modo desarrollo
```bash
npm run dev
```

Modo producción
```bash
npm run start
```

Modo demonio pm2 (este es el que se usará para el despliegue)
```bash
pm2 start index.js
```

> Nota: en este punto deberíamos poder acceder al API desde el navegador, http://your-ip-ecs-aws:4000/persons

<br />

### Instalando el APP Web

#### 1 - Clonar el proyecto

Crear una carpeta para el proyecto
```bash
cd /home/ubuntu/app
```

Clonar el proyecto
```bash
git clone git@github.com:hackaboss-workshops-irwing/nextjs-example-app.git
cd nextjs-example-app
```

Habilitar el .env
```bash
cp .env.example .env
```

Configurar las variables de entorno
```bash
nano .env
```

> Nota: agregar la ip del servidor en la variable NEXT_PUBLIC_API_URL, incluyendo el puerto 4000.

#### 2 - Instalar las dependencias

```bash
npm install
```

#### 3 - Crear el build

```bash
npm run build
```

> Nota: dependiendo del frameowrk que se use, el comando para crear el build y la carpeta output puede variar. En nuestro caso usamos Next.js y la carpeta output es /home/ubuntu/app/nextjs-example-app/.next/server/app

#### 4 - Copiar la carpeta default del build de next como /build

```bash
mkdir /home/ubuntu/app/nextjs-example-app/build
cp -Rf /home/ubuntu/app/nextjs-example-app/.next/server/app/* /home/ubuntu/app/nextjs-example-app/build
```

<br />

### Automatizando el despliegue del API

#### 1 - Crear un github action

En nuestro proyecto API, creamos una carpeta .github/workflows y dentro de ella un archivo deploy.yml.

```bash
cd /home/ubuntu/app/express-example-api
mkdir .github/workflows
touch .github/workflows/deploy.yml
```

Configurar el archivo deploy.yml
```yml
name: Deploy API

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Set up SSH connection
      uses: webfactory/ssh-agent@v0.5.3
      with:
        ssh-private-key: ${{ secrets.SSH_KEY }}
    - name: Execute update commands on server
      run: |
        ssh -o "StrictHostKeyChecking=no" ubuntu@${{ secrets.SERVER_DEPLOY }} << EOF
        cd /home/ubuntu/app/express-example-api
        git pull origin main
        npm install
        pm2 restart /home/ubuntu/app/express-example-api/index.js
        EOF
```

#### 2 - Configurar los secretos en el repositorio de GitHub

Agregar el secret SSH_KEY y el secret SERVER_DEPLOY en el repositorio de GitHub.
- En el repositorio de GitHub, haz clic en Configuración.
- En el panel de la izquierda, haz clic en Secretos.
- Haz clic en Actions.
- Haz clic en Nuevo secreto de repositorio.
- En el campo Nombre, escribe SSH_KEY y en el campo Valor, pega el par de claves privadas del EC2.
- Haz clic en Agregar secreto.
- Haz clic en Nuevo secreto de repositorio.
- En el campo Nombre, escribe SERVER_DEPLOY y en el campo Valor, escribe la ip del servidor.

<br />

### Automatizando el despliegue del APP Web

#### 1 - Crear un github action

En nuestro proyecto API, creamos una carpeta .github/workflows y dentro de ella un archivo deploy.yml.

```bash
cd /home/ubuntu/app/nextjs-example-app
mkdir .github/workflows
touch .github/workflows/deploy.yml
```

Configurar el archivo deploy.yml
```yml
name: Deploy APP

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Set up SSH connection
      uses: webfactory/ssh-agent@v0.5.3
      with:
        ssh-private-key: ${{ secrets.SSH_KEY }}
    - name: Execute update commands on server
      run: |
        ssh -o "StrictHostKeyChecking=no" ubuntu@${{ secrets.SERVER_DEPLOY }} << EOF
        cd /home/ubuntu/app/nextjs-example-app
        git pull origin main
        npm install
        npm run build
        cp -Rf /home/ubuntu/app/nextjs-example-app/.next/server/app/* /home/ubuntu/app/nextjs-example-app/build
        sudo systemctl restart nginx
        EOF
```

#### 2 - Configurar los secretos en el repositorio de GitHub

Agregar el secret SSH_KEY y el secret SERVER_DEPLOY en el repositorio de GitHub.
- En el repositorio de GitHub, haz clic en Configuración.
- En el panel de la izquierda, haz clic en Secretos.
- Haz clic en Actions.
- Haz clic en Nuevo secreto de repositorio.
- En el campo Nombre, escribe SSH_KEY y en el campo Valor, pega el par de claves privadas del EC2.
- Haz clic en Agregar secreto.
- Haz clic en Nuevo secreto de repositorio.
- En el campo Nombre, escribe SERVER_DEPLOY y en el campo Valor, escribe la ip del servidor.

<br />

### Recomendaciones

Aunque en esta documentación hemos usado AWS, también puedes usar otros servicios como Digital Ocean, Heroku, etc. Cada uno tiene sus propias características y ventajas, pero el proceso de despliegue es muy similar.

Te recomiendo que leas la documentación que hemos creado por completo antes de empezar el proceso de despliegue, ya que hay muchos pasos y detalles que debes tener en cuenta, y así te podrás asegurar de tener todos los recursos necesarios para llevar a cabo el despliegue.

Las aplicaciones son de referencia y debereis adaptarlas a vuestros proyectos, pero el proceso de despliegue es el mismo, aunque hemos utilizar JavaScript, el proceso suele ser similar para otros lenguajes de programación.

> Nota: recuerda apagar las instancias o servidores que contrates cuándo no estés haciendo pruebas ya que pueden incurrir en costos.

<br />

### Comunidad

Entra al canal de [HACK A BOSS]('https://www.hackaboss.com/') en Discord y comparte tus experiencias, dudas y proyectos con la comunidad.
