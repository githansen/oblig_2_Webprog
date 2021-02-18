$(function() {
    let liste = [];
    $("#Kjopbillett").click(function () {
        const tall = $("#Antall").val();
        const Telefonnr = $("#Telefonnr").val();
        let ut = "<table><tr>" +
            "<th>Navn</th><th>Film</th><th>Telefonnr</th> <th>Antall</th>" +
            "<th>E-post</th> </tr>";


        //Variabel for å sjekke om alle felter er fylt ut
        let inputvalidering = 0;



        //Billettens attributter, fra input
        const Billett = {
            Antall: Number(tall),
            Film: $("#Filmer").val(),
            Fornavn: $("#Fornavn").val(),
            Etternavn: $("#Etternavn").val(),
            Telefonnr: Number(Telefonnr),
            Epost: $("#Epost").val()
        }

        if (inputvalidering == 0){
            $.get("/lagre",Billett, function(){

            })
        }
        //array med verdier fra input
        let inputliste = [];
        inputliste.push(Billett.Fornavn);
        inputliste.push(Billett.Etternavn);
        inputliste.push(Billett.Antall);
        inputliste.push(Billett.Telefonnr);
        inputliste.push(Billett.Epost);


        //Array med ID-er til feilmeldinger.
        let IDliste = [];
        IDliste.push("Fornavnerror");
        IDliste.push("Etternavnerror");
        IDliste.push("Nummererror");
        IDliste.push("Telefonerror");
        IDliste.push("Eposterror");

        //Array med ID-er
        let IDliste2 = [];
        IDliste2.push("Fornavn");
        IDliste2.push("Etternavn");
        IDliste2.push("Antall");
        IDliste2.push("Telefonnr");
        IDliste2.push("Epost");


        //Loop gjennom inputfeltene. Dersom et felt er tomt skrives feilmelding ut
        for (let i = 0; i < IDliste.length; i++){
            if (inputliste[i] == ""){
                let  inputerror = "Du må skrive noe inn i " + IDliste2[i]
                $("#" + IDliste[i]).html(inputerror.fontcolor("red"))
                inputvalidering ++;
            }
            else {
                $("#" + IDliste[i]).html("")
            }
        }
        //Dersom alle felt er fylt ut, vil den nye billetten legges til arrayet.

        //Går gjennom arrayet av billetter, og skriver de ut til listen.
        for (let i = 0; i < liste.length; i++){
            ut +="<tr>" +  "<td>"+ liste[i].Fornavn + " " +liste[i].Etternavn + "</td>" + "<td>" +liste[i].Film +"</td>" + "<td>"
                +liste[i].Telefonnr + "</td>" + "<td>" + liste[i].Antall +
                "</td>" + "<td>" + liste[i].Epost + "</td>" + "</tr>"
        }


        ut += "<br>"
        ut += "</table>"

        $("#Billettliste").html(ut);


        //dersom alle feltene er fylt ut resettes alle inputfeltene.
        if (inputvalidering == 0){

            for (i = 0; i < IDliste2.length; i++) {
                $("#" + IDliste2[i]).val("")
            }}

    });

    //funksjon for å slette billettene.
    $("#Slettbilletter").click(function () {

        liste.splice(0, liste.length);

        $("#Billettliste").html("")
    });

});