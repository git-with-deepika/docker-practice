FROM eclipse-temurin:17-alpine

WORKDIR /app

#COPY . .
COPY src/Main.java /app/Main.java

RUN javac Main.java

CMD ["java","Main"]

