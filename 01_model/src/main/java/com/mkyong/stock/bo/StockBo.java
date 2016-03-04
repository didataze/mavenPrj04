package com.mkyong.stock.bo;

import com.mkyong.stock.model.Stock;

import java.util.List;

public interface StockBo {
	
	void save(Stock stock);
	
	void update(Stock stock);
	
	void delete(Stock stock);
	
	Stock findByStockCode(String stockCode);

	List<Stock> findAllStock();

}
