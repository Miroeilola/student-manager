-- init.sql
CREATE DATABASE IF NOT EXISTS student_course_db;
USE student_course_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    teacher VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS studentJoinCourse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE IF NOT EXISTS user (
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);

-- Optional: Insert some initial data
-- INSERT INTO students (name, email) VALUES ('John Doe', 'john@example.com');
-- INSERT INTO courses (title, description) VALUES ('Mathematics 101', 'Introductory course to Mathematics');