package com.example.backend.controller;

import com.example.backend.entity.TestUser;
import com.example.backend.repository.TestUserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users2")
@CrossOrigin(origins = "http://localhost:3000") // React 서버 주소
public class TestUserController {
    private final TestUserRepository testUserRepository;

    public TestUserController(TestUserRepository testUserRepository) {
        this.testUserRepository = testUserRepository;
    }

    @GetMapping
    public List<TestUser> getUsers() {
        return testUserRepository.findAll();
    }

    @PostMapping
    public TestUser createUser(@RequestBody TestUser user) {
        return testUserRepository.save(user);
    }
}
