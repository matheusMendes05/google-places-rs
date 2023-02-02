
# Montagen do ambiente de desenvolvimento.

## Instalar o Docker na maquina
Baixar e instalar o docker na sua maquina, através da url https://www.docker.com/products/docker-desktop.

## Executar o comando abaixo a partir da pasta raiz do projeto para criar a imagem.
docker build --pull --rm -f "Dockerfile" -t googleplacesrs:0.0.1 "." 

## Para a execução da aplicação, deve-se configurar algumas variáveis de ambiente
PORT=3333

### Google Places
GOOGLE_BASE_URL=https://maps.googleapis.com/maps/api/geocode/json?
GOOGLE_API_KEY= chave Geocoding API (GOOGLE)

### X_API_KEY
X_API_KEY=ZmKPDqukxhLnpRbJ37tNeDCBCM5t9J