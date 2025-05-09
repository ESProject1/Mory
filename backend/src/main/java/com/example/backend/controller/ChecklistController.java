package com.example.backend.controller;

import com.example.backend.dto.ChecklistDto;
import com.example.backend.entity.Checklist;
import com.example.backend.service.ChecklistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/checklists")
@RequiredArgsConstructor
public class ChecklistController {

    private final ChecklistService checklistService;

    @PostMapping
    public ResponseEntity<?> saveChecklist(@RequestBody ChecklistDto dto) {
        try {
            Checklist saved = checklistService.saveChecklist(dto);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }

    @GetMapping("/today")
    public ResponseEntity<?> getTodayChecklists(@RequestParam Long userId, @RequestParam String today) {
        try {
            LocalDate todayDate = LocalDate.parse(today);
            List<Checklist> todayChecklists = checklistService.getTodayChecklists(userId, todayDate);

            List<ChecklistDto> checklistDtos = todayChecklists.stream().map(checklist -> {
                ChecklistDto dto = new ChecklistDto();
                dto.setChecklistId(checklist.getChecklistId()); // 이거 추가!!
                dto.setUserId(checklist.getUser().getUserId());
                dto.setCDate(checklist.getCDate());
                dto.setCMonth(checklist.getCMonth());
                dto.setCContent(checklist.getCContent());
                dto.setIsCompleted(checklist.getIsCompleted());
                return dto;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(checklistDtos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteChecklist(@PathVariable Long id) {
        try {
            checklistService.deleteChecklist(id);
            return ResponseEntity.ok("삭제 성공");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateChecklistStatus(@PathVariable Long id, @RequestBody ChecklistDto dto) {
        try {
            checklistService.updateChecklistStatus(id, dto.getIsCompleted());
            return ResponseEntity.ok("체크리스트 완료 여부 수정 성공");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }

    @PostMapping("/monthly")
    public ResponseEntity<?> saveMonthlyChecklist(@RequestBody ChecklistDto dto) {
        try {
            System.out.println("🎯 [Controller] 전달된 DTO.cMonth: " + dto.getCMonth()); // ✅ 확인용 로그
            Checklist checklist = checklistService.saveMonthlyChecklist(dto);
            return ResponseEntity.ok(checklist);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }

    @GetMapping("/monthly")
    public ResponseEntity<?> getMonthlyChecklists(@RequestParam Long userId, @RequestParam String cMonth) {
        try {
            List<Checklist> monthChecklists = checklistService.getMonthlyChecklists(userId, cMonth);

            List<ChecklistDto> dtos = monthChecklists.stream().map(checklist -> {
                ChecklistDto dto = new ChecklistDto();
                dto.setChecklistId(checklist.getChecklistId());
                dto.setUserId(checklist.getUser().getUserId());
                dto.setCMonth(checklist.getCMonth());
                dto.setCContent(checklist.getCContent());
                dto.setIsCompleted(checklist.getIsCompleted());
                return dto;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(dtos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }

    @GetMapping("/yearly")
    public ResponseEntity<?> getAllMonthlyChecklists(@RequestParam Long userId) {
        try {
            List<Checklist> yearlyChecklists = checklistService.getAllMonthlyChecklists(userId);

            List<ChecklistDto> dtos = yearlyChecklists.stream().map(checklist -> {
                ChecklistDto dto = new ChecklistDto();
                dto.setChecklistId(checklist.getChecklistId());
                dto.setUserId(checklist.getUser().getUserId());
                dto.setCMonth(checklist.getCMonth());
                dto.setCContent(checklist.getCContent());
                dto.setIsCompleted(checklist.getIsCompleted());
                return dto;
            }).collect(Collectors.toList());

            return ResponseEntity.ok(dtos);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 오류: " + e.getMessage());
        }
    }



}
