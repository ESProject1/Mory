package com.example.backend.scheduler;

import com.example.backend.service.ChecklistService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class ChecklistCleaner {

    private final ChecklistService checklistService;

    @Scheduled(cron = "0 0 2 * * *") // 매일 새벽 2시
    public void cleanOldChecklists() {
        checklistService.deleteOldChecklists();
        log.info("5일 이상 지난 체크리스트 삭제 완료");
    }
}
