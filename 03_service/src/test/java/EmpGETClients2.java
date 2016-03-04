/**
 * Created by stepinfo on 03/03/16.
 */

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class EmpGETClients2 {

    public static void main(String[] args){

        Client client = Client.create();
        WebResource webResource = client.resource("http://localhost:8080/rest/emp/allStock");

        ClientResponse response = webResource.type("application/xml").get(ClientResponse.class);

        System.out.println("All Operation Response Processing ....\n");
        String output = response.getEntity(String.class);
        System.out.print(output);

    }
}
