# docker-excercise

docker HA and rolling updates example.

1. init docker swarm
```shell
docker swarm init
```

2. build images
```shell
mvn clean install dockerfile:build
```

3.deploy stack (use also for update when compose file changes)
```shell
docker stack deploy  -c docker-compose.yml myapp
```
4. scale service up
```shell
 docker service  scale  myapp_web=3
```
5. update service (use `--force` flag when image tag remians same)
```shell
docker service update myapp_web --force 
```
6.
install pontainer manager
```shell
 docker service create --name portainer --publish 9000:9000 --replicas=1 --constraint 'node.role == manager' --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock --mount type=bind,src=//opt/portainer,dst=/data portainer/portainer -H unix:///var/run/docker.sock
```
