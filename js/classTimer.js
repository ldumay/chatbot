// Compte à rebour
// 1000 = 10s | 30000 = 30s | 60000 = 1m | 9000 = 1m30s
class TimerMessage{
    //préparation
    constructor(message,time){
        //variable values
        this.time = time;
        this.message = message;
        //constant values
    }
    //action
    start(message,time){
        //console.log( timer );
        this.message = message;
        this.time = time * 1000;
        var messagepass = this.message;
        console.log('Message : '+this.message+' - Time : '+this.time+' - MessagePass : '+messagepass);
        
        timer = setTimeout(function(_messagepass){
            console.log('Message à afficher : '+messagepass);
            // Descente de la page vers le bas
            scrollToBottom();
            // Préparation de la date du message
            today = createDateNow();
            $(messagepass+" #message_date").html('<small id="message_date" class="text-muted">'+today+'</small>');
            // Affiche le message suivant
            $(messagepass).css("display", "flex");
        },this.time);
    }
}