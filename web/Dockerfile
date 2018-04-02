FROM nginx:latest
COPY conf/proxy.conf /etc/nginx/nginx.conf
COPY dist /webstatic
RUN ls -a /webstatic
EXPOSE 80


 #docker run --name test-nginx -p 80:80 -v /home/zamek/src/docker-excercise/nginx/proxy.conf:/etc/nginx/nginx.conf:ro  nginx 