package edu.ucsb.cs156.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name = "ucsbdiningcommonsmenu")
public class UCSBDiningCommonsMenu {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id; 
  
  private String diningCommonsCode;
  private String name;
  private String station;
}