FROM maven:3.8.7-openjdk-18-slim AS build
WORKDIR /build
COPY src /build/src
COPY pom.xml .
RUN mvn dependency:go-offline -B
RUN mvn package -DskipTests

FROM openjdk:26-jdk-slim
COPY --from=build /build/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
