package com.example.demo.controller;

import com.example.demo.model.DiemDen;
import com.example.demo.model.DiemDi;
import com.example.demo.model.QuanLy;
import com.example.demo.service.IDiemDenService;
import com.example.demo.service.IDiemDiService;
import com.example.demo.service.IQuanLyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("quanLy")
@CrossOrigin("http://localhost:4200")
public class QuanLyRestController {
  @Autowired
  private IQuanLyService quanLyService;
  @Autowired
  private IDiemDenService diemDenService;
  @Autowired
  private IDiemDiService diemDiService;

  @GetMapping("/list")
  public ResponseEntity<Page<QuanLy>> goList(@PageableDefault(5)Pageable pageable,
                                             @RequestParam Optional<String> email) {
    String keyWord = email.orElse("");
    Page<QuanLy> quanLyPage = quanLyService.findAllPage(pageable,keyWord);
    if (!quanLyPage.hasContent()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(quanLyPage, HttpStatus.OK);
    }
  }

  @GetMapping("/update/{id}")
  public ResponseEntity<QuanLy> goUpdate(@PathVariable Integer id) {
    QuanLy quanLy = quanLyService.findByIdQuanLy(id);

    return new ResponseEntity<>(quanLy, HttpStatus.OK);
  }

  @PatchMapping("/update")
  public ResponseEntity<Void> update(
    @RequestBody QuanLy quanLy) {
    try {
      this.quanLyService.saveQuanLy(quanLy);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(HttpStatus.OK);
  }
  @PostMapping("/add")
  public ResponseEntity<Void> add(@RequestBody QuanLy quanLy) {

      this.quanLyService.saveQuanLy(quanLy);
    return new ResponseEntity<>(HttpStatus.OK);
  }
  @GetMapping("/listDiemDen")
  public ResponseEntity<List<DiemDen>> goListDiemDen() {
    List<DiemDen> diemDenList = diemDenService.getAllDienDen();
    if (diemDenList.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(diemDenList, HttpStatus.OK);
    }
  }
  @GetMapping("/diemDen/{id}")
  public ResponseEntity<DiemDen> goDiemDen(@PathVariable Integer id) {
    DiemDen diemDen = diemDenService.findById(id);
    return new ResponseEntity<>(diemDen, HttpStatus.OK);
  }
  @GetMapping("/listDiemDi")
  public ResponseEntity<List<DiemDi>> goListDiemDi() {
    List<DiemDi> diemDiList = diemDiService.getAllDiemDi();
    if (diemDiList.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(diemDiList, HttpStatus.OK);
    }

  }
  @GetMapping("/diemDi/{id}")
  public ResponseEntity<DiemDi> goDiemDi(@PathVariable Integer id) {
    DiemDi diemDi = diemDiService.findById(id);
    return new ResponseEntity<>(diemDi, HttpStatus.OK);
  }
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<QuanLy> goDelete(@PathVariable Integer id){
    QuanLy quanLy = quanLyService.findByIdQuanLy(id);
    if (quanLy  == null){
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    else{
      quanLyService.deleteQuanLy(id);
      return new ResponseEntity<>(HttpStatus.OK);
    }

  }
}


