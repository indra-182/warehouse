package com.example.Warehouse.service;


public interface TransactionService {

    public String supplierToWarehouseTransaction(String goodsId, String idFrom, String idTo, int goodsQuantity);
}
