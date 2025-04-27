package com.example.backend.repository;

import com.example.backend.entity.Checklist;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface ChecklistRepository extends JpaRepository<Checklist, Long> {

    @Query("SELECT c FROM Checklist c WHERE c.user.userId = :userId AND c.cDate = :cDate")
    List<Checklist> findTodayChecklists(@Param("userId") Long userId, @Param("cDate") LocalDate cDate);

    @Modifying
    @Transactional
    @Query("DELETE FROM Checklist c WHERE c.cDate < :date")
    void deleteOldChecklists(@Param("date") LocalDate date);

}

