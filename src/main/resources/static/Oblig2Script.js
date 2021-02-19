

    function Kjopbillett() {
        const tall = $("#Antall").val();
        const Telefonnr = $("#Telefonnr").val();

        //Variabel for å sjekke om alle felter er fylt ut
        let inputvalidering = 0;
        //Billettens attributter, fra input
        const Billett = {
            antall: Number(tall),
            film: $("#Filmer").val(),
            fornavn: $("#Fornavn").val(),
            etternavn: $("#Etternavn").val(),
            telefonnr: Number(Telefonnr),
            epost: $("#Epost").val()
        }

        //array med verdier fra input
        let inputliste = [];
        inputliste.push(Billett.fornavn);
        inputliste.push(Billett.etternavn);
        inputliste.push(Billett.antall);
        inputliste.push(Billett.telefonnr);
        inputliste.push(Billett.epost);

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

        if (inputvalidering == 0){
            $.get("/Lagre",Billett, function(){
               hent()
            })

        }

        if (inputvalidering == 0){

            for (let i = 0; i < IDliste2.length; i++) {
                $("#" + IDliste2[i]).val("")
            }}

        function hent(){
            $.get("/HentBilletter", function (data) {
               formaterData(data);
            });
        }
            function formaterData(Billetter){
                let ut = "<table><tr>" +
                    "<th>Navn</th><th>Film</th><th>Telefonnr</th> <th>Antall</th>" +
                    "<th>E-post</th> </tr>"

                for (const Billett of Billetter) {
                    ut +="<tr><td>"+ Billett.fornavn + " " +Billett.etternavn + "</td>" + "<td>" +Billett.film +"</td>" + "<td>"
                        +Billett.telefonnr+ "</td>" + "<td>" + Billett.antall +
                        "</td>" + "<td>" + Billett.epost + "</td>" + "</tr>"
                }

                ut += "</table>"
                $("#Billettliste").html(ut)
            }

    }

    //funksjon for å slette billettene.
   function Slettbilletter() {

       $.get("/SlettBilletter", function(){
       });

        $("#Billettliste").html("")
    }

