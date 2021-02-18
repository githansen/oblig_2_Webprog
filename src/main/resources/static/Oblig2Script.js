

    function Kjopbillett() {
        const tall = $("#Antall").val();
        const Telefonnr = $("#Telefonnr").val();

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

        if (inputvalidering == 0){
            $.get("/LagreogSkrivut",Billett, function(data){
                $("#Billettliste").html(data)
            })

        }

        if (inputvalidering == 0){

            for (i = 0; i < IDliste2.length; i++) {
                $("#" + IDliste2[i]).val("")
            }}


    }

    //funksjon for å slette billettene.
   function Slettbilletter() {

       $.get("/SlettBilletter", function(){
       });

        $("#Billettliste").html("")
    }

