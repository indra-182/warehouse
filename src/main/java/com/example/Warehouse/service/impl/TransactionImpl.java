package com.example.Warehouse.service.impl;

import com.example.Warehouse.model.Transaction;
import com.example.Warehouse.repository.TransactionRepository;
import com.example.Warehouse.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public String supplierToWarehouseTransaction(String goodsId, String idFrom, String idTo, int goodsQuantity) {
        Transaction transaction = new Transaction();
        transaction.setGoodsId(goodsId);
        transaction.setIdFrom(idFrom);
        transaction.setIdTo(idTo);
        transaction.setGoodsQuantity(goodsQuantity);
        transaction.setType("SUP_TO_WRH");
        transactionRepository.save(transaction);
        return "ok";
    }

}
