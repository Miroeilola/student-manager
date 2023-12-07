package com.vamk.e2001024.studentmanager.repository;

import com.vamk.e2001024.studentmanager.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    // Custom queries here if needed
}
