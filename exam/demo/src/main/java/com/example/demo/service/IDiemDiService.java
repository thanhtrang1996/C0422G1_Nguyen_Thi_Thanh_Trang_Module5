package com.example.demo.service;

import com.example.demo.model.DiemDi;

import java.util.List;

public interface IDiemDiService {
  List<DiemDi> getAllDiemDi();

  DiemDi findById(Integer id);
}
