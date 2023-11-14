function dataUser(event) {
    event.preventDefault();
    //chiedo all'utente quanti kilometri vuole percorrere ela sua età
    let name = document.getElementById("name").value;
    console.log(name)
    let distance = document.getElementById("Km_da_Percorrere").value;
    console.log(distance)
    let age = document.getElementById("age_select").value;
    console.log(age)

    distance = parseInt(distance);
    let ticketPrice = distance * 0.21;
    if (age == "Minorenne") {
        ticketPrice = ticketPrice * 0.8;
    }
    else if (age == "Over65") {
        ticketPrice = ticketPrice * 0.6;
            
    }
    let finalprice = ticketPrice.toFixed(2);







    


    console.log(finalprice)
    document.getElementById("user_price").innerHTML = finalprice;
}





