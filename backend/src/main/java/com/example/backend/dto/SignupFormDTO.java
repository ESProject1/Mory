package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupFormDTO {
    private String id;
    private String password;
    private String name;
    private String phone_number; // ✅ 프론트 JSON과 맞추기 위해 유지
}
