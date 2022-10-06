package com.example.demo.model;

import javax.persistence.*;

@Entity
public class DiemDi {
  @Id
  @GeneratedValue (strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;

  public DiemDi() {
  }

  public DiemDi(Integer id, String name) {
    this.id = id;
    this.name = name;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
