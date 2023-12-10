CREATE DATABASE IF NOT EXISTS student_course_db;
USE student_course_db;

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    teacher VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS student_join_course (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Optional: Insert some initial data
INSERT INTO students (firstname, lastname, email) VALUES ('John', 'Doe', 'john@doe.com');
INSERT INTO students (firstname, lastname, email) VALUES ('Jane', 'Doe', 'jane@doe.com');
INSERT INTO students (firstname, lastname, email) VALUES ('Max', 'Mustermann', 'max@mustermann.com');

INSERT INTO courses (name, teacher) VALUES ('Math', 'Mrs. Smith');
INSERT INTO courses (name, teacher) VALUES ('English', 'Mr. Miller');
INSERT INTO courses (name, teacher) VALUES ('History', 'Mrs. Miller');
