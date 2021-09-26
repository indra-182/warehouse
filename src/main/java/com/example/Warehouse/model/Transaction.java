package com.example.Warehouse.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "trx_transaction")
public class Transaction {

    @Id
    private String id;
    private String goodsId;
    private String idFrom;
    private String idTo;
    private String type;
    private int goodsQuantity;
    private Date goodsDelivery;
    private Date goodsArrived;


    public String getId() {
        if (id == null || id.equals("")) {
            id = UUID.randomUUID().toString();
        }
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getIdFrom() {
        return idFrom;
    }

    public void setIdFrom(String idFrom) {
        this.idFrom = idFrom;
    }

    public String getIdTo() {
        return idTo;
    }

    public void setIdTo(String idTo) {
        this.idTo = idTo;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getGoodsQuantity() {
        return goodsQuantity;
    }

    public void setGoodsQuantity(int goodsQuantity) {
        this.goodsQuantity = goodsQuantity;
    }

    public Date getGoodsDelivery() {
        return goodsDelivery;
    }

    public void setGoodsDelivery(Date goodsDelivery) {
        this.goodsDelivery = goodsDelivery;
    }

    public Date getGoodsArrived() {
        return goodsArrived;
    }

    public void setGoodsArrived(Date goodsArrived) {
        this.goodsArrived = goodsArrived;
    }
}