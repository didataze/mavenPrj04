package com.mkyong.stock.dao.impl;

import com.mkyong.stock.model.Stock;
import com.mkyong.stock.dao.StockDao;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import java.util.List;

public class StockDaoImpl extends HibernateDaoSupport implements StockDao{
	
	public void save(Stock stock){
		getHibernateTemplate().save(stock);
	}
	
	public void update(Stock stock){
		getHibernateTemplate().update(stock);
	}
	
	public void delete(Stock stock){
		getHibernateTemplate().delete(stock);
	}
	
	public Stock findByStockCode(String stockCode){
		List list = getHibernateTemplate().find("from Stock where stockCode=?",stockCode);
		return (Stock)list.get(0);
	}

	public List<Stock> findAllStock() {
		List list1 = getHibernateTemplate().find("from Stock");
		return  list1;
	}

}
