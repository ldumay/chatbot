/* Code préparer */

/*
// Compte à rebour
function timer(counter,showTimer,timeOutAction,resetParameters){
    // 1000 = 10s | 30000 = 30s | 60000 = 1m | 9000 = 1m30s
    var cssWidth = 0;
    var time = counter * 100;
    var intervalId = null;
    function action() {
        clearInterval(intervalId);
        if(counter<0)
            counter=0;
        // Evolution de la barre de progression en fonction du temps
        setTimeout(function(){
            $("#progress-bar").addClass("progress-bar-success");
            $("#progress-bar").removeClass("active");
        }, time);
        // Action de fin
        setTimeout(function(){
            console.log('end - compteur!');
            $('#timer').hide();
            if(timeOutAction!=null){ $(timeOutAction).css("display", "flex"); }
            if(resetParameters==true){ counter = 0; cssWidth = 0; }
        }, time)
    }
    function bip() {
        console.log("counter: "+counter);
        console.log("cssWidth: "+cssWidth);

        if(showTimer==false){ $(".timer").show(); }
        $("#progress-bar").css("width",""+cssWidth+"%");

        cssWidth = cssWidth + 10;
        counter--;
    }
    function start() {
        console.log('start - compteur');
        intervalId = setInterval(bip, time);
        setTimeout(action, counter * (time+100) );
    }
    start()
}
*/
// Affichage
function afficheDisplayID(valueID){ $('#'+valueID+'').show(); }
function masqueDisplayID(valueID){ $('#'+valueID+'').hide(); }

/*
function(){
    $.ajax({
        url : 'more_com.php',
        type : 'GET',
        dataType : 'html',
        success : function(code_html, statut){ // success est toujours en place, bien sûr !
            alert('test');
        },
        error : function(resultat, statut, erreur){
         alert('test');
        }
     });
}
*/

// Initialisation d'un compte à rebour
function initTimer(messageg,time){
    timer = new TimerMessage();
    //console.log( timer );
    timer.start(messageg,time);
}

// Préparation des donneés de fin à afficher
function affichMessageFin(){}

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

    // Préparation des donnée à afficher
    if(client.sexe=='Homme'){ denomitation = 'Monsieur'; }else{ denomitation = 'Madame'; }
    today = createDateNow();
    console.log(today);
    today = formatDate(today,'y');
    birthday = formatDate(client.age,'y');
    majority = today - birthday;
    if(majority>=18){ majority_type = 'majeur'; }else{ majority_type = 'mineur'; }
    console.log('Today : '+today+' - Age : '+client.age+'\nMajority : '+majority+'\nMajorité type : '+majority_type);
    phrase = '<p>Merci '+denomitation+' '+client.nom+' '+client.prenom+' vous êtes '+majority_type+' !</p>';
    console.log(phrase);
    $("#message_fin").html(phrase);

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

    client = new Client();
    console.log( client );
    
    initTimer('#message_1',2);
    initTimer('#message_2',4);
});