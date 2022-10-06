package com.example.demo.service;

import com.example.demo.model.DiemDen;

import java.util.List;

public interface IDiemDenService {
  List<DiemDen> getAllDienDen();

  DiemDen findById(Integer id);
}
