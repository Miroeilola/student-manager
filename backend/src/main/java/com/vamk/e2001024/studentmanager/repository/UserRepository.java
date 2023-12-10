package com.vamk.e2001024.studentmanager.repository;
import com.vamk.e2001024.studentmanager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Custom queries here if needed
}