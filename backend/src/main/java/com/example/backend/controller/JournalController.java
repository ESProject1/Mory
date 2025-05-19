package com.example.backend.controller;

import com.example.backend.dto.JournalRequestDto;
import com.example.backend.service.JournalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/journal")
@RequiredArgsConstructor
public class JournalController {

    private final JournalService journalService;

    @PostMapping
    public ResponseEntity<String> createJournal(@RequestBody JournalRequestDto dto) {
        journalService.saveJournal(dto);
        return ResponseEntity.ok("일기가 성공적으로 저장되었습니다.");
    }
}