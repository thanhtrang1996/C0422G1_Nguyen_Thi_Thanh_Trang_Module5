package com.example.demo.repository;

import com.example.demo.model.QuanLy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;


public interface IQuanLyRepository extends JpaRepository<QuanLy, Integer> {
  @Query(value = "SELECT * FROM quan_ly where status = 0 and email like :email", countQuery = "select count(*) from quan_ly", nativeQuery = true)
  Page<QuanLy> getAllPage(Pageable pageable,@Param("email") String email);

  @Transactional
  @Modifying
  @Query(value = "update quan_ly set status = 1 where id =:id", nativeQuery = true)
  void deleteStatus(@Param("id") Integer id);

  @Transactional
  @Modifying
  @Query(value = "insert into quan_ly (email, gio_den, gio_di, loai_xe, so_dien_thoai, so_xe, ten_nha_xe, diem_den_id, diem_di_id, status) values " +
    "( :#{#quanLy.email} , :#{#quanLy.gioDen} , :#{#quanLy.gioDi} , :#{#quanLy.loaiXe} , :#{#quanLy.soDienThoai} , :#{#quanLy.soXe} , :#{#quanLy.tenNhaXe} , " +
    " :#{#quanLy.diemDen.id} , :#{#quanLy.diemDi.id} , :#{#quanLy.status}) ", nativeQuery = true)
  void saveQuanLy(QuanLy quanLy);


  @Query(value = "SELECT * FROM quan_ly where id =:id and status = 0;", nativeQuery = true)
  Optional<QuanLy> findByIdQuanLy(@Param("id") Integer id);

  @Transactional
  @Modifying
  @Query(value =
    " UPDATE quan_ly " +
    " SET " +
    " email = :#{#quanLy.email} , " +
    " gio_den = :#{#quanLy.gioDen} , " +
    " gio_di = :#{#quanLy.gioDi} , " +
    " loai_xe = :#{#quanLy.loaiXe} , " +
    " so_dien_thoai = :#{#quanLy.soDienThoai} , " +
    " so_xe = :#{#quanLy.soXe} , " +
    " ten_nha_xe = :#{#quanLy.tenNhaXe} , " +
    " diem_den_id = :#{#quanLy.diemDen.id} , " +
    " diem_di_id = :#{#quanLy.diemDi.id} , " +
    " status = :#{#quanLy.status} " +
    " WHERE id = :#{#quanLy.id} ", nativeQuery = true)
  void updateQuanLy(QuanLy quanLy);
}
