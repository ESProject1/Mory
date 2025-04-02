package com.example.backend.service;

import com.example.backend.dto.LoginRequestDTO;
import com.example.backend.dto.LoginResponseDTO;
import com.example.backend.dto.SignupFormDTO;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void registerUser(SignupFormDTO dto) {
        if (userRepository.existsById(dto.getId())) {
            throw new RuntimeException("이미 존재하는 아이디입니다.");
        }

        User user = User.builder()
                .id(dto.getId())
                .password(dto.getPassword())
                .name(dto.getName())
                .phoneNumber(dto.getPhone_number())
                .build();

        userRepository.save(user);
    }

    public LoginResponseDTO login(String id, String password) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 아이디입니다."));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }

        return new LoginResponseDTO(user.getName(), "로그인 성공");
    }
}
