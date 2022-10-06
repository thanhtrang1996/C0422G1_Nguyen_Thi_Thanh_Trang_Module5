package com.example.demo.service.impl;

import com.example.demo.model.DiemDen;
import com.example.demo.repository.IDiemDenRepository;
import com.example.demo.service.IDiemDenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDenService implements IDiemDenService {
  @Autowired
  private IDiemDenRepository diemDenRepository;

  @Override
  public List<DiemDen> getAllDienDen() {
    return diemDenRepository.getAllDiemDen();
  }

  @Override
  public DiemDen findById(Integer id) {
    return diemDenRepository.findById(id).orElse(null);
  }
}
