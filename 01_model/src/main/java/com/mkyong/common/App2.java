package com.mkyong.common;

import com.mkyong.stock.bo.StockBo;
import com.mkyong.stock.model.Stock;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

/**
 * Created by stepinfo on 04/03/16.
 */
public class App2 {

    public static void main(String[] args) {
        ApplicationContext appContext =
                new ClassPathXmlApplicationContext("spring/config/BeanLocations.xml");

        StockBo stockBo = (StockBo) appContext.getBean("stockBo");

        /** insert **/
        Stock stock = new Stock();
        stock.setStockCode("7668");
        stock.setStockName("HAIO");
        stockBo.save(stock);

        /** select **/
        Stock stock2 = stockBo.findByStockCode("7668");
        System.out.println(stock2);

        /** update **/
        stock2.setStockName("HAIO-1");
        stockBo.update(stock2);

        /** delete **/
        stockBo.delete(stock2);


        /** All Stock **/
        List<Stock> stocks = stockBo.findAllStock();

        for (Stock st : stocks) {
            System.out.println(st.getStockName());
        }

        System.out.println("Done");
    }

}
