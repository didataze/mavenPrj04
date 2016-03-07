package com.mkyong.stock.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by stepinfo on 03/03/16.
 */

@XmlAccessorType(XmlAccessType.NONE)
@XmlRootElement(name="stock")
public class Stock implements java.io.Serializable {

    private static final long serialVersionUID = 1L;

    private Long stockId;
    private String stockCode;
    private String stockName;

    public Stock() {
    }

    public Stock(String stockCode, String stockName) {
        this.stockCode = stockCode;
        this.stockName = stockName;
    }

    @XmlElement(required = true)
    public Long getStockId() {
        return this.stockId;
    }

    public void setStockId(Long stockId) {
        this.stockId = stockId;
    }
    @XmlElement(required = true)
    public String getStockCode() {
        return this.stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }
    @XmlElement(required = true)
    public String getStockName() {
        return this.stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }
}
