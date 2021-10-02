# todo 
- setup lets encrypt certificate
https://medium.com/rahasak/setup-lets-encrypt-certificate-with-nginx-certbot-and-docker-b13010a12994

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
    image: ghcr.io/hamilton-lima/smallflatworld/smallflatworld:latest
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

## install webhook

```
sudo apt-get install webhook
```

Create `/opt/smallflatworld/restart.sh` 
and add execution permission `chmod +x /opt/smallflatworld/restart.sh`

```
#!/bin/bash
docker-compose pull
docker-compose restart
```

Generate a secret, e.g. `uuigen` 

Update service definition to make it verbose 
```
nano /lib/systemd/system/webhook.service
...
ExecStart=/usr/bin/webhook -nopanic -hooks /etc/webhook.conf -verbose
```


Generate `/etc/webhook.conf` file
```
[
  {
    "id": "restart",
    "execute-command": "/opt/smallflatworld/restart.sh",
    "command-working-directory": "/opt/smallflatworld",
    "response-message": "restarting smallflatworld server",
    "trigger-rule":
    {
      "match":
      {
        "type": "value",
        "value": "<secret goes here>",
        "parameter":
        {
          "source": "url",
          "name": "token"
        }
      }
    }
  }
]
```

Start webhook service
```
systemctl start webhook
```

Follow the service logs 
```
journalctl -f -u webhook.service
```

Call the service to test
```
curl smallflatworld.com:9000/hooks/restart?token=<secret also goes here>
```



# CLI Depot 

docker exec -it web /bin/ash -c "cat /etc/nginx/nginx.conf"