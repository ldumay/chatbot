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
        $('#message_3').css("display", "flex");
    }
    recupNomEtPrenom(nomprenom){
        console.log('nomprenom : '+nomprenom);
        nomprenom = nomprenom.split(' ',2);
        console.log('nom : '+nomprenom[0]+'\nprenom : '+nomprenom[1]);
        this.nom = nomprenom[0];
        this.prenom = nomprenom[1];
        $('#message_5').css("display", "flex");
    }
    recupAge(age){ 
        this.age = age
        $('#message_7').css("display", "flex");
    }
}