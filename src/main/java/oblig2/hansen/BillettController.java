package oblig2.hansen;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class BillettController {
    private final List<Billett> alleBilletter = new ArrayList<>();
    @GetMapping("/Lagre")
    public void Lagrebillett () {

    }
    @GetMapping("/Skrivut")
    public String Listeut(){
        return "";
    }
}
