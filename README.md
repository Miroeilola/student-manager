# Student Course Management System

## Overview
This project is a containerized application for managing students and courses. It consists of a Spring Boot REST API backend, a MariaDB database, and an Angular frontend. The system features JWT token authorization for secure access.

## Features
- **Student Management**: Add, update, delete, and view students.
- **Course Management**: Add, update, delete, and view courses. View students enrolled in courses.
- **User Authentication**: User registration and login with JWT token-based authentication.

## Prerequisites
- Docker
- Docker Compose
- JDK 17 or later
- Node.js
- Angular CLI

## Installation

### Clone the Repository
git clone [repository-url]
cd student-course-management-system

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Build and run the Spring Boot application using Docker:

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Build and run the Angular application using Docker:

### Database Setup
1. Navigate to the db directory: `cd db`
2. (Optional) Modify `init.sql` to pre-populate the database.
3. Run the MariaDB database using Docker.

### Running with Docker Compose
1. From the project root directory, run: `docker-compose up`

## Usage
- Access the Angular frontend at `http://localhost:80`.
- The Spring Boot REST API is available at `http://localhost:8080`.

## API Endpoints
### Student API
- `GET /students`: List all students.
- `POST /students`: Add a new student.
- `GET /students/{id}`: Get student by ID.
- `PUT /students/{id}`: Edit student by ID.
- `DELETE /students/{id}`: Delete student by ID.

### Course API
- `GET /courses`: List all courses.
- `POST /courses`: Add new course.
- `GET /courses/{id}`: Get course by ID.
- `PUT /courses/{id}`: Update course by ID.
- `DELETE /courses/{id}`: Delete course by ID.

### Authentication API
- `POST /register`: Register a new user.
- `POST /login`: Authenticate a user and return a JWT token.

