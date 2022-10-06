package com.example.demo.service;

import com.example.demo.model.QuanLy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IQuanLyService {
  List<QuanLy> findAll();

  QuanLy findByIdQuanLy(Integer id);

  void saveQuanLy(QuanLy quanLy);

  void deleteQuanLy(Integer id);


  Page<QuanLy> findAllPage(Pageable pageable,String email);
}
