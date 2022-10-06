package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "quanLy")
public class QuanLy {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String soXe;
  private String loaiXe;
  private String tenNhaXe;
  private String soDienThoai;
  private String email;
  private String gioDi;
  private String gioDen;
  private Boolean status;
  @ManyToOne
  @JoinColumn(name = "diem_den_id", referencedColumnName = "id")
  private DiemDen diemDen;
  @ManyToOne
  @JoinColumn(name = "diem_di_id", referencedColumnName = "id")
  private DiemDi diemDi;

  public QuanLy() {
  }

  public QuanLy(Integer id, String soXe, String loaiXe, String tenNhaXe,
                String soDienThoai, String email, String gioDi, String gioDen, DiemDen diemDen, DiemDi diemDi,Boolean status) {
    this.id = id;
    this.soXe = soXe;
    this.loaiXe = loaiXe;
    this.tenNhaXe = tenNhaXe;
    this.soDienThoai = soDienThoai;
    this.email = email;
    this.gioDi = gioDi;
    this.gioDen = gioDen;
    this.diemDen = diemDen;
    this.diemDi = diemDi;
    this.status = status;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Boolean getStatus() {
    return status;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

  public String getSoXe() {
    return soXe;
  }

  public void setSoXe(String soXe) {
    this.soXe = soXe;
  }

  public String getLoaiXe() {
    return loaiXe;
  }

  public void setLoaiXe(String loaiXe) {
    this.loaiXe = loaiXe;
  }

  public String getTenNhaXe() {
    return tenNhaXe;
  }

  public void setTenNhaXe(String tenNhaXe) {
    this.tenNhaXe = tenNhaXe;
  }

  public String getSoDienThoai() {
    return soDienThoai;
  }

  public void setSoDienThoai(String soDienThoai) {
    this.soDienThoai = soDienThoai;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getGioDi() {
    return gioDi;
  }

  public void setGioDi(String gioDi) {
    this.gioDi = gioDi;
  }

  public String getGioDen() {
    return gioDen;
  }

  public void setGioDen(String gioDen) {
    this.gioDen = gioDen;
  }

  public DiemDen getDiemDen() {
    return diemDen;
  }

  public void setDiemDen(DiemDen diemDen) {
    this.diemDen = diemDen;
  }

  public DiemDi getDiemDi() {
    return diemDi;
  }

  public void setDiemDi(DiemDi diemDi) {
    this.diemDi = diemDi;
  }

}
