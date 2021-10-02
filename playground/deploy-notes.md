# todo 
 
- add webhook
https://github.com/adnanh/webhook/blob/master/docs/Hook-Examples.md#a-simple-webhook-with-a-secret-key-in-get-query

- setup supervisor 
https://willbrowning.me/setting-up-automatic-deployment-and-builds-using-webhooks/

- setup lets encrypt certificate

# setup docker 

```
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install -y docker-ce docker-compose
```

# pull first version of the image 

```
mkdir /opt/smallflatworld
cd /opt/smallflatworld
```

## login to github docker 

see https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

```
export CR_PAT=<Personal access token>
echo $CR_PAT | docker login ghcr.io -u <github username> --password-stdin
```
## Create docker-compose 

```
cd /opt/smallflatworld
nano docker-compose.yml 
```

docker compose content
```
version: "2.2"
services:
  web:
    container_name: web
    image: ghcr.io/hamilton-lima/smallflatworld/smallflatworld
    restart: always
    ports:
      - "80:80"
    logging:
      driver: "json-file"
      options:
        max-size: "200k"
        max-file: "10"
```        

## pull first version

```
docker pull ghcr.io/hamilton-lima/smallflatworld/smallflatworld
docker-compose up -d
```
