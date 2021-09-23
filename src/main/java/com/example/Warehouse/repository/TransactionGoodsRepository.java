package com.example.Warehouse.repository;

import com.example.Warehouse.model.TransactionGoods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionGoodsRepository extends JpaRepository<TransactionGoods,String> {
}
