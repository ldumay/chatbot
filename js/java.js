/* Code préparer */

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

$("#homme").click(function(){
    client.modifHomme;
    console.log( client );
});
$("#femme").click(function(){
    client.modifFemme;
    console.log( client );
});

/* Code actif après chargement de la page */
$(function() {
    client = new Client();
    console.log('Ready!');
    console.log( client );
    // timer(10,false,'#message_2',true);

    /*
    timer(10,false,'#message_3',true);
    timer(10,false,'#message_4',true);
    timer(10,false,'#message_5',true);
    timer(10,false,'#message_6',true);
    timer(10,false,'#message_7',true);
    timer(10,false,null,false);
    */
});