package oblig2.hansen;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class BillettController {
    private final List<Billett> alleBilletter = new ArrayList<>();

    @PostMapping ("/Lagre")
    public void Lagrebillett (Billett nyBillett) {
            alleBilletter.add(nyBillett);
    }
    @GetMapping("/HentBilletter")
    public List <Billett> hent(){
        return alleBilletter;
    }

    @GetMapping("/SlettBilletter")
    public void SlettBilletter(){
        alleBilletter.clear();
    }




}
