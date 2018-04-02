#FROM openjdk:8-jdk-alpine
FROM openjdk:10-jre-slim
RUN apt-get update && apt-get install -y curl
VOLUME /tmp
ARG JAR_FILE
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]