package com.example.demo.service.impl;

import com.example.demo.model.DiemDi;
import com.example.demo.repository.IDiemDiRepository;
import com.example.demo.service.IDiemDiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiemDiService implements IDiemDiService {
  @Autowired
  private IDiemDiRepository diemDiRepository;

  @Override
  public List<DiemDi> getAllDiemDi() {
    return diemDiRepository.getAllDiemDi();
  }

  @Override
  public DiemDi findById(Integer id) {
    return diemDiRepository.findById(id).orElse(null);
  }
}
