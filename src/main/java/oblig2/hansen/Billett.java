package oblig2.hansen;

public class Billett {
    private int antall;
    private String film;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String epost;

    public Billett(int antall, String film, String fornavn, String etternavn, int telefonnr, String epost){
        this.antall = antall;
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }
    public Billett(){

    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        antall = antall;
    }

    public String getFilm() {
        return film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
       this.etternavn = etternavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}
