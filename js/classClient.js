class Client{
    // Préparation client
    constructor(sexe,nom,prenom,age){
        this.sexe = sexe;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    // Modification du client
    modifHomme(){ this.sexe = 'Homme'; }
    modifFemme(){ this.sexe = 'Femme'; }
    recupNomEtPrenom(text){ 
        this.nom = text[1];
        this.prenom = text[2];
    }
    recupAge(age){ this.age = age }
}