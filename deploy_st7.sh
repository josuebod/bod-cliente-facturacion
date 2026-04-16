#!/bin/bash

# DEPLOY AUTOMATICO CON NPM
# Taiel: 13/04/2026

# Variables
nombre="blue-crm-front-cliente-facturacion"
entorno="staging"
env="st7"

path="mf/cliente-facturacion"
html_folder="/var/www/${nombre}"
dist_folder="dist/bod-cliente-facturacion/browser"
project_dir="/home/${nombre}"
properties_env="${project_dir}/src/environments/environment.${env}.ts"
properties_file="${project_dir}/src/environments/environment.ts"

curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"${nombre} Fe ${entorno} ${env} - Start\"}" https://discord.com/api/webhooks/1200063276776693941/6hc1XPVrOcTyCpw0Qo17mf1JOQvXo6Y8OGBH21nqzNeWwr4Evnn2HIKu_G53n_uJiyGs

echo "-Github pull"
git add *
git stash
git reset --hard
git stash clear
git gc --prune=now
git checkout $entorno
git pull

if [ ! -f "${properties_env}" ]; then
  echo "El archivo ${properties_env} no existe."
  curl -X POST -H "Content-Type: application/json" \
    -d "{\"content\": \"${nombre} Fe ${entorno} ${env} - End | El archivo ${properties_env} no existe\"}" \
    https://discord.com/api/webhooks/1200063276776693941/6hc1XPVrOcTyCpw0Qo17mf1JOQvXo6Y8OGBH21nqzNeWwr4Evnn2HIKu_G53n_uJiyGs
  exit 1
fi

echo "-NPM Install"

sudo npm install

echo "-Build"

if [ -z "$path" ]; then
  sudo ng build -c $env --base-href /
else
  base="${path#/}"
  base="${base%/}"
  sudo ng build -c $env --base-href "/${base}/"
fi

if [ -d "$dist_folder" ]; then
    echo "-Delete folder"
    if [ -d "$html_folder" ]; then
        echo "Se borro: $html_folder"
        sudo rm -r $html_folder
    else
        echo "No existe: $html_folder"
    fi

    echo "-Copiar dist a html"
    cp -r $dist_folder $html_folder

    if [ -d "$dist_folder" ]; then
        curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"${nombre} Fe ${entorno} ${env} - Status: TRUE - Start\"}" https://discord.com/api/webhooks/1200063276776693941/6hc1XPVrOcTyCpw0Qo17mf1JOQvXo6Y8OGBH21nqzNeWwr4Evnn2HIKu_G53n_uJiyGs
    else
        curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"${nombre} Fe ${entorno} ${env} - Status: FALSE - Error al copiar dist > html - Start\"}" https://discord.com/api/webhooks/1200063276776693941/6hc1XPVrOcTyCpw0Qo17mf1JOQvXo6Y8OGBH21nqzNeWwr4Evnn2HIKu_G53n_uJiyGs
    fi

else
    echo "ERROR: No existe la carpeta dist"
    curl -X POST -H "Content-Type: application/json" -d "{\"content\": \"${nombre} Fe ${entorno} ${env} - Status: FALSE - Error al buildear - Start\"}" https://discord.com/api/webhooks/1200063276776693941/6hc1XPVrOcTyCpw0Qo17mf1JOQvXo6Y8OGBH21nqzNeWwr4Evnn2HIKu_G53n_uJiyGs
fi
