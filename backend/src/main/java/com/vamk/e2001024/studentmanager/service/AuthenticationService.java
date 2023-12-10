package com.vamk.e2001024.studentmanager.service;

import org.springframework.stereotype.Service;

import com.vamk.e2001024.studentmanager.model.User;
import com.vamk.e2001024.studentmanager.repository.UserRepository;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


@Service
public class AuthenticationService {

    private final UserRepository userRepository;

    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(User user) {
        return "User: " + user.getUsername() + " logged in!";
    }

    public String register(User user) {
        user.setPassword(hashPassword(user.getPassword()));
        userRepository.save(user);
        return "User: " + user.getUsername() + " registered!";
    }

    public String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hashedBytes = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hashedBytes) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}

