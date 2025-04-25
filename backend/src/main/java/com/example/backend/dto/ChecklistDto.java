package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ChecklistDto {
    private Long userId;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate cDate;

    private String cMonth;

    @JsonProperty("cContent")
    private String cContent;

    private Boolean isCompleted;
}
