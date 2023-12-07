# DB Dockerfile
FROM mariadb:latest

# Environment variables for setting up the database
ENV MYSQL_DATABASE=student_course_db
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Expose the default port
EXPOSE 3306

# Optional: Copy the init.sql file to docker-entrypoint-initdb.d which will be executed on container startup
COPY ./init.sql /docker-entrypoint-initdb.d/