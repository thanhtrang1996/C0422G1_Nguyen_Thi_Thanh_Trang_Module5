package com.example.demo.repository;

import com.example.demo.model.QuanLy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface IQuanLyRepository extends JpaRepository<QuanLy, Integer> {
  @Query(value = "SELECT * FROM quanly.quan_ly where status = 0 and quan_ly.email like :email", countQuery = "select count(*) from quan_ly", nativeQuery = true)
  Page<QuanLy> getAllPage(Pageable pageable, String email);


  @Modifying
  @Query(value = "update quan_ly set status = 1 where id =:id", nativeQuery = true)
  void deleteStatus(Integer id);

  @Modifying
  @Query(value = "insert into quan_ly (email, gio_den, gio_di,loai_xe,so_dien_thoai,so_xe,ten_nha_xe,diem_den_id,diem_di_id,status) values \n" +
    "(?1, ?2,?3, ?4,?5,?6,?7,?8,?9,?10);", nativeQuery = true)
  void saveQuanLy(String email, String gioDen, String gioDi, String loaiXe, String soDienThoai, String soXe, String tenNhaXe, Integer diemDi, Integer diemDen, Boolean status);


  @Query(value = "SELECT * FROM quanly.quan_ly where id =:id and status = 0;",nativeQuery = true)
  Optional<QuanLy> findByIdQuanLy(Integer id);

@Modifying
@Query(value = "SET sql_safe_updates = 0;\n" +
  "update quan_ly\n" +
  "        set email =?1,\n" +
  "        gio_den=?2,\n" +
  "        gio_di =?3,\n" +
  "        loai_xe =?4\n" +
  "        so_dien_thoai =?5\n" +
  "        so_xe =?6\n" +
  "        te_nha_xe =?7\n" +
  "        diem_den_id = ?8\n" +
  "        diem_di_id =?9,\n" +
  "        status =?10 where id = ?11\n" +
  "        SET sql_safe_updates = 1;\n",nativeQuery = true)
  void updateQuanLy(String email, String gioDen, String gioDi, String loaiXe, String soDienThoai, String soXe, String tenNhaXe, Integer diemDi, Integer diemDen, Boolean status,Integer id);
}
