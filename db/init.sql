-- init.sql
CREATE DATABASE IF NOT EXISTS student_course_db;
USE student_course_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);

-- Optional: Insert some initial data
-- INSERT INTO students (name, email) VALUES ('John Doe', 'john@example.com');
-- INSERT INTO courses (title, description) VALUES ('Mathematics 101', 'Introductory course to Mathematics');