package com.example.demo.service.impl;

import com.example.demo.model.QuanLy;
import com.example.demo.repository.IQuanLyRepository;
import com.example.demo.service.IQuanLyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuanLyService implements IQuanLyService {
  @Autowired
  private IQuanLyRepository quanLyRepository;

  @Override
  public List<QuanLy> findAll() {
    return quanLyRepository.findAll();
  }


  @Override
  public QuanLy findByIdQuanLy(Integer id) {
    return quanLyRepository.findByIdQuanLy(id).orElse(null);
  }

  @Override
  public void deleteQuanLy(Integer id) {
    quanLyRepository.deleteStatus(id);
  }

  @Override
  public Page<QuanLy> findAllPage(Pageable pageable,String email) {
    return quanLyRepository.getAllPage(pageable,"%"+email+"%");
  }

  @Override
  public void updateQuanLy(QuanLy quanLy) {
     quanLyRepository.updateQuanLy(quanLy);
  }

  @Override
  public void saveQuanLy(QuanLy quanLy) {
    quanLyRepository.saveQuanLy(quanLy);
  }
}
