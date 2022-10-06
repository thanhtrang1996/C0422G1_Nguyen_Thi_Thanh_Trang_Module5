package com.example.demo.repository;

import com.example.demo.model.DiemDi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDiemDiRepository extends JpaRepository<DiemDi,Integer> {
  @Query(value = "SELECT * FROM diem_di;",nativeQuery = true)
  List<DiemDi> getAllDiemDi();

}
