package oblig2.hansen;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class BillettController {
    private final List<Billett> alleBilletter = new ArrayList<>();
    @GetMapping("/LagreogSkrivut")
    public String Lagrebillett (Billett nyBillett) {
            alleBilletter.add(nyBillett);


        String ut = "<table><tr>" +
                "<th>Navn</th><th>Film</th><th>Telefonnr</th> <th>Antall</th>" +
                "<th>E-post</th> </tr>";


        for (Billett i : alleBilletter){
            ut +="<tr>" +  "<td>"+ i.getFornavn() + " " +i.getEtternavn() + "</td>" + "<td>" +i.getFilm() +"</td>" + "<td>"
                    +i.getTelefonnr()+ "</td>" + "<td>" + i.getAntall() +
                    "</td>" + "<td>" + i.getEpost() + "</td>" + "</tr>";
        }

        ut += "</table>";
        return ut;
    }

    @GetMapping("/SlettBilletter")
    public void SlettBilletter(){
        alleBilletter.clear();
    }
}
