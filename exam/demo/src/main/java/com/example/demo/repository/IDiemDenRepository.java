package com.example.demo.repository;

import com.example.demo.model.DiemDen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDiemDenRepository extends JpaRepository<DiemDen,Integer> {
  @Query(value = "SELECT * FROM quanly.diem_den;",nativeQuery = true)
  List<DiemDen> getAllDiemDen();
}
