
# Montagen do ambiente de desenvolvimento.

## Instalar o Docker na maquina
Baixar e instalar o docker na sua maquina, através da url https://www.docker.com/products/docker-desktop.

## Executar o comando abaixo para gerar a build do projeto.
npm run build

## Executar o comando abaixo a partir da pasta raiz do projeto para criar a imagem.
docker build --pull --rm -f "Dockerfile" -t googleplacesrs:0.1 "."


## links documentacao Geolocation API

https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding?hl=pt-br

https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding?hl=pt-br#reverse-restricted

#### referencia
https://medium.com/data-hackers/geocodifica%C3%A7%C3%A3o-sem-google-maps-api-parte-i-f4e9e32c386
