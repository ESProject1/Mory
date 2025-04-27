package com.example.backend.service;

import com.example.backend.dto.ChecklistDto;
import com.example.backend.entity.Checklist;
import com.example.backend.entity.User;
import com.example.backend.repository.ChecklistRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ChecklistService {

    private final ChecklistRepository checklistRepository;
    private final UserRepository userRepository;

    public Checklist saveChecklist(ChecklistDto dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다. userId: " + dto.getUserId()));

        Checklist checklist = Checklist.builder()
                .user(user)
                .cDate(dto.getCDate())
                .cMonth(dto.getCMonth())
                .cContent(dto.getCContent())
                .isCompleted(dto.getIsCompleted())
                .build();

        return checklistRepository.save(checklist);
    }

    public List<Checklist> getTodayChecklists(Long userId, LocalDate today) {
        return checklistRepository.findTodayChecklists(userId, today);
    }

    public void deleteChecklist(Long id) {
        checklistRepository.deleteById(id);
    }

    public void updateChecklistStatus(Long id, Boolean isCompleted) {
        Checklist checklist = checklistRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("체크리스트를 찾을 수 없습니다. id: " + id));
        checklist.setIsCompleted(isCompleted);
        checklistRepository.save(checklist);
    }

}
