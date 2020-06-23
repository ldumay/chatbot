function convMonth(month){
    switch (month) {
        case 'January': month = '01'; break;
        case 'February': month = '02'; break;
        case 'March': month = '03'; break;
        case 'April': month = '04'; break;
        case 'May': month = '05'; break;
        case 'June': month = '06'; break;
        case 'July': month = '07'; break;
        case 'August': month = '08'; break;
        case 'September': month = '09'; break;
        case 'October': month = '10'; break;
        case 'November': month = '11'; break;
        case 'December': month = '12'; break;
        default: month = '00';
    }return month;
}
function createDateNow(){
    d = new Date();
    ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    mo = convMonth(mo);
    today = ye+'-'+mo+'-'+da;
    return today;
}
function formatDate(date,type){
    var msec = Date.parse(date);
    var d = new Date(msec);
    switch(type){
        case 'y': 
            date = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
            break;
        case 'm': 
            date = new Intl.DateTimeFormat('en', { year: 'long' }).format(d);
            date = convMonth(date);
            break;
        case 'd': 
            date = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
            break;
    }return date;
}