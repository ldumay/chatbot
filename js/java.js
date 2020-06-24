/* Code préparer */

// Initialisation d'un compte à rebour
function initTimer(messageg,time){
    timer = new TimerMessage();
    //console.log( timer );
    timer.start(messageg,time);
}

/*
// Source URI de Dev
console.log("Output;");  
console.log(location.hostname);
console.log(document.domain);

console.log("document.URL : "+document.URL);
console.log("document.location.href : "+document.location.href);
console.log("document.location.origin : "+document.location.origin);
console.log("document.location.hostname : "+document.location.hostname);
console.log("document.location.host : "+document.location.host);
console.log("document.location.pathname : "+document.location.pathname);

// Bar de chargegment
function timerBar() {
    console.log('TimerBar => counter : '+counter+' - cssWidth : '+cssWidth);
    if(showTimer==false){ $(".timer").show(); }
    $("#progress-bar").css("width",""+cssWidth+"%");
    cssWidth = cssWidth + 10;
    counter--;
}
*/

// Préparation des donneés de fin à afficher
function affichMessageFin(nom,prenom,sexe,age){
    if(sexe=='Homme'){ denomitation = 'Monsieur'; }else{ denomitation = 'Madame'; }
    today = createDateNow();
    console.log(today);
    today = formatDate(today,'y');
    birthday = formatDate(age,'y');
    majority = today - birthday;
    if(majority>=18){ majority_type = 'majeur'; }else{ majority_type = 'mineur'; }
    console.log('Today : '+today+' - Age : '+age+'\nMajority : '+majority+'\nMajorité type : '+majority_type);
    phrase = '<p>Merci '+denomitation+' '+nom+' '+prenom+' vous êtes '+majority_type+' !</p>';
    console.log(phrase);
    $("#message_fin").html(phrase);
}

// Envoi des données vers l'API
function envoiDataToApi(data){
    url = document.location.origin+':3000/api/v1/';
    console.log('Url d\'envoi : '+url);
    $.post( url, data );
    console.log('Datas posted !');
}

// Choix du sexe Homme
$("#homme").click(function(){
    client.modifSexe('Homme');
    $("#message_2 .message_content").html('<p>Merci !</p>');
    initTimer('#message_4',2);
    // Descente de la page vers le bas
    scrollToBottom();
});
// Choix du sexe Femme
$("#femme").click(function(){
    client.modifSexe('Femme');
    $("#message_2 .message_content").html('<p>Merci !</p>');
    initTimer('#message_4',2);
    // Descente de la page vers le bas
    scrollToBottom();
});
// Insertion du Nom et Prénom
$('#validnomprenom').click(function(){
    var nomprenom = $('#nomprenom').val();
    console.log('nomprenom : '+nomprenom);
    client.recupNomEtPrenom(nomprenom)
    console.log( client );
    $("#message_4 .message_content").html('<p>Merci !</p>');
    initTimer('#message_6',2);
    // Descente de la page vers le bas
    scrollToBottom();
});
// Insertion de l'âge et Affichageg de l'avant dernier message
$('#validage').click(function(){
    var age = $('#age').val();
    console.log('age : '+age);
    client.recupAge(age);
    console.log( client );

    // Envoi des données du client vers l'API
    envoiDataToApi(client);
    // Mise à jour des données du cookie client
    ecrire_cookie('client', client);
    cookieclient = lire_cookie('client');
    console.log('Mise à jour du cookie "client" '+cookieclient);

    // Affichage du message de Fin
    affichMessageFin(client.nom,client.prenom,client.sexe,client.age);

    $("#message_6 .message_content").html('<p>Merci !</p>');
    // Affichage du dernier message
    initTimer('#message_8',2);
    // Descente de la page vers le bas
    scrollToBottom();
});
// Relancer la conversation
$('#reload').click(function(){
    document.location.reload(true);
});

/* Code actif après chargement de la page */
$(function() {
    console.log('Start');

    // Préparation du cookie du client
    ecrire_cookie('client', '{ sexe:"", nom:"", prenom:"" ,age:"" }');
    cookieclient = lire_cookie('client');
    console.log("Cookie 'client' "+cookieclient);

    // Préparation des données du client
    client = new Client();
    console.log( client );
    
    // Démarrage de la conversation
    initTimer('#message_1',1);
    initTimer('#message_2',2);
});