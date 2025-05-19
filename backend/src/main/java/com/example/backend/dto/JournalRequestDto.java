package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JournalRequestDto {
    @JsonProperty("userId")
    private Long userId;

    @JsonProperty("jDate")
    private String jDate;

    @JsonProperty("weather")
    private String weather;

    @JsonProperty("jTitle")
    private String jTitle;

    @JsonProperty("jContent")
    private String jContent;

    @Override
    public String toString() {
        return "JournalRequestDto{" +
                "userId=" + userId +
                ", jDate='" + jDate + '\'' +
                ", weather='" + weather + '\'' +
                ", jTitle='" + jTitle + '\'' +
                ", jContent='" + jContent + '\'' +
                '}';
    }
}