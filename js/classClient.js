class Client{
    // Préparation client
    constructor(sexe,nom,prenom,age){
        this.sexe = sexe;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    // Modification du client
    modifSexe(sexe){ 
        this.sexe = sexe;
        console.log( client );
        // Préparation de la date du message
        today = createDateNow();
        $("#message_3 #message_date").html(today);
        $('#message_3').css("display", "flex");
    }
    recupNomEtPrenom(nomprenom){
        console.log('nomprenom : '+nomprenom);
        nomprenom = nomprenom.split(' ',2);
        console.log('nom : '+nomprenom[0]+'\nprenom : '+nomprenom[1]);
        this.nom = nomprenom[0];
        this.prenom = nomprenom[1];
        // Préparation de la date du message
        today = createDateNow();
        $("#message_5 #message_date").html(today);
        $('#message_5').css("display", "flex");
    }
    recupAge(age){ 
        this.age = age
        // Préparation de la date du message
        today = createDateNow();
        $("#message_7 #message_date").html(today);
        $('#message_7').css("display", "flex");
    }
}