
package com.example.backend.service;

import com.example.backend.dto.JournalRequestDto;
import com.example.backend.entity.Journal;
import com.example.backend.entity.User;
import com.example.backend.repository.JournalRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class JournalService {

    private final JournalRepository journalRepository;
    private final UserRepository userRepository;

    public void saveJournal(JournalRequestDto dto) {
        if (dto.getJDate() == null || dto.getJDate().isBlank()) {
            throw new IllegalArgumentException("날짜(jDate)는 필수 항목입니다.");
        }

        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다: " + dto.getUserId()));

        Journal journal = Journal.builder()
                .user(user)
                .jDate(LocalDate.parse(dto.getJDate()))  // 여기서 null일 경우 위에서 걸러짐
                .weather(dto.getWeather())
                .jTitle(dto.getJTitle())
                .jContent(dto.getJContent())
                .build();

        journalRepository.save(journal);
    }


}