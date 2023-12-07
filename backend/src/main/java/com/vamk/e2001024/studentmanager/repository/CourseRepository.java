package com.vamk.e2001024.studentmanager.repository;
import com.vamk.e2001024.studentmanager.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // Custom queries here if needed
}
