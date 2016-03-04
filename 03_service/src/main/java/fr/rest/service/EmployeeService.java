package fr.rest.service;

import com.mkyong.stock.model.Stock;
import com.rest.employee.model.Employee;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;



/**f
 * Created by stepinfo on 03/03/16.
 */
@Path("/emp")
public class EmployeeService {

//    @Autowired
//    StockBo stockBo;

    @GET
    @Path("/get/{empID}")
    @Produces(MediaType.APPLICATION_JSON)
    public Employee getEmployee(@PathParam("empID") String empID){
        Employee employee = new Employee();
        employee.setEmpID(empID);
        employee.setName("aze dida");
        employee.setEmail("aze@aze.aze");
        return employee;
    }

    @GET
    @Path("/allStock")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Stock> getlisteStock(){
        List<Stock> stocks =new ArrayList<Stock>() ;
//        ApplicationContext appContext =
//                new ClassPathXmlApplicationContext("spring/config/BeanLocations.xml");
//        StockBo stockBo = (StockBo) appContext.getBean("stockBo");
//         stocks = stockBo.findAllStock();
        return stocks;
    }

    @GET
    @Path("/liste")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> getEmployes(){
        List<Employee> employees = new ArrayList<Employee>();

        Employee employee = new Employee();
        employee.setEmpID("123");
        employee.setName("aze dida");
        employee.setEmail("aze@aze.aze");
        employees.add(employee);
        Employee employee2 = new Employee();
        employee2.setEmpID("123");
        employee2.setName("aze dida");
        employee2.setEmail("aze@aze.aze");
        employees.add(employee2);

        return employees;
    }

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_XML)
    @Produces(MediaType.APPLICATION_XML)
    public Employee createEmployee(Employee employee){
        return employee;
    }

    @PUT
    @Path("/update")
    @Consumes(MediaType.APPLICATION_XML)
    @Produces(MediaType.APPLICATION_XML)
    public Employee updateEmployee(Employee employee){

        employee.setName(employee.getName()+" updated");
        return employee;
    }

    @DELETE
    @Path("/delete/{empID}")
    public Response deleteEmployee(@PathParam("empID") int empID) throws URISyntaxException{
        return Response.status(200).entity("Employee with " + empID + "is deleted successfully").build();
    }
}
