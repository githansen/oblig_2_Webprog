package oblig2.hansen;

public class Billett {
    private int Antall;
    private String Film;
    private String Fornavn;
    private String Etternavn;
    private int Telefonnr;
    private String Epost;

    public Billett(int Antall, String Film, String Fornavn, String Etternavn, int Telefonnr, String Epost){
        this.Antall = Antall;
        this.Film = Film;
        this.Fornavn = Fornavn;
        this.Etternavn = Etternavn;
        this.Telefonnr = Telefonnr;
        this.Epost = Epost;
    }
    public Billett(){

    }

    public int getAntall() {
        return Antall;
    }

    public void setAntall(int antall) {
        Antall = antall;
    }

    public String getFilm() {
        return Film;
    }

    public String getFornavn() {
        return Fornavn;
    }

    public String getEtternavn() {
        return Etternavn;
    }

    public void setEtternavn(String etternavn) {
        Etternavn = etternavn;
    }

    public void setFornavn(String fornavn) {
        Fornavn = fornavn;
    }

    public void setFilm(String film) {
        Film = film;
    }

    public int getTelefonnr() {
        return Telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        Telefonnr = telefonnr;
    }

    public String getEpost() {
        return Epost;
    }

    public void setEpost(String epost) {
        Epost = epost;
    }
}
