package com.example.Warehouse.repository;

import com.example.Warehouse.model.WarehouseGoodsDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseGoodsDetailRepository extends JpaRepository<WarehouseGoodsDetail,String> {
}
