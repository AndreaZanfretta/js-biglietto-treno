const kmprice = 0.21;
let discount;
let km;
let age;
let ticketPrice;
let totale = document.getElementById("prezzi");


km = parseInt(prompt('Quanti km devi percorrere?'));
age = parseInt(prompt('Quanti anni hai?'));

if(!isNaN(age) && !isNaN(km) && age>0 && km>0){
    if(age < 18 && age !== null){
        ticketPrice = (km * kmprice).toFixed(2);
        discount = parseFloat((ticketPrice - ((ticketPrice * 20) /100)).toFixed(2));
        totale.innerHTML = 
            `
                <p>${ticketPrice}€</p>
                <p>${(ticketPrice - discount).toFixed(2)}€</p>
                <p>${discount.toFixed(2)}€</p>
            `
        ;

    } else if(age > 65 && age !== null){
        ticketPrice = (km * kmprice).toFixed(2);
        discount = parseFloat((ticketPrice - ((ticketPrice * 40) /100)).toFixed(2));
        totale.innerHTML = 
            `
                <p>${ticketPrice}€</p>
                <p>${(ticketPrice - discount).toFixed(2)}€</p>
                <p>${discount.toFixed(2)}€</p>
            `
        ;
    } else{
        ticketPrice = (km * kmprice).toFixed(2);
        totale.innerHTML = 
            `
                <p>${ticketPrice}€</p>
                <p>0.00€</p>
                <p>${ticketPrice}€</p>
            `;
    }
} else{
    alert("Ricarica e inserisci valori validi");
}
