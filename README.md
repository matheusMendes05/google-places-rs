
# Montagen do ambiente de desenvolvimento.

## Instalar o Docker na maquina
Baixar e instalar o docker na sua maquina, através da url https://www.docker.com/products/docker-desktop.

## Executar o comando abaixo para gerar a build do projeto.
npm run build

## Executar o comando abaixo a partir da pasta raiz do projeto para criar a imagem.
docker build --pull --rm -f "Dockerfile" -t googleplacesrs:0.1 "."
