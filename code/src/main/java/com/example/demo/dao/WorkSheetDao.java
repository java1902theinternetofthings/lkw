package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.demo.entity.WorkSheet;

public interface WorkSheetDao extends JpaRepository<WorkSheet, Integer>,JpaSpecificationExecutor<WorkSheet>{

}
