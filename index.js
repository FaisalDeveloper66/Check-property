const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `your are Subscribed!`
    }
    else{
        subResult.textContent= `User are Not Subscribed!`
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are Paying with visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with Master Card.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you are paying with Paypal.`
    }
    else{
        paymentResult.textContent = `You must select a payment type!`;
    }
}