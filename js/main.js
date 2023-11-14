function userHasFinishDataCompletion(event) {
    event.preventDefault();
//chiedo all'utente quanti kilometri vuole percorrere ela sua età
let name = document.getElementById("Name").value;
let distance = document.getElementById("Km_da_Percorrere").value;
let age = document.getElementById("age_select").value;

distance = parseInt(distance);
let ticketPrice = distance * 0.21;
if (age == Minorenne) {
    ticketPrice = ticketPrice * 0.8;
}
else if (age == Over65) {
    ticketPrice = ticketPrice * 0.6
        ;
}
let finalprice =ticketPrice






    //calcolo il prezzo del biglietto (0,21 al km)
    
    

    // applico lo sconto in base alla età
    

    
    document.getElementById("user_price").innerHTML = finalprice;
}




