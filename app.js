let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let plus_minus1 = document.getElementById("count1");
let plus_minus2 = document.getElementById("count2");
let plus_minus3 = document.getElementById("count3");
let plus_minus4 = document.getElementById("count4");
let plus_minus5 = document.getElementById("count5");
let plus_minus6 = document.getElementById("count6");

let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter3 = document.getElementById("counter3");
let counter4 = document.getElementById("counter4");
let counter5 = document.getElementById("counter5");
let counter6 = document.getElementById("counter6");

btn1.addEventListener("click", function (){

    btn1.style.display = "none";
    plus_minus1.style.display = "flex";
    counter1.style.display = "flex";
    counter1.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 1!');
    //     item = "1";
    //     tg.MainButton.show();
    // }
})

btn2.addEventListener("click", function (){

    btn2.style.display = "none";
    plus_minus2.style.display = "flex";
    counter2.style.display = "flex";
    counter2.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 2!');
    //     item = "2";
    //     tg.MainButton.show();
    // }

})

btn3.addEventListener("click", function (){

    btn3.style.display = "none";
    plus_minus3.style.display = "flex";
    counter3.style.display = "flex";
    counter3.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 3!');
    //     item = "3";
    //     tg.MainButton.show();
    // }
})

btn4.addEventListener("click", function (){

    btn4.style.display = "none";
    plus_minus4.style.display = "flex";
    counter4.style.display = "flex";
    counter4.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 4!');
    //     item = "4";
    //     tg.MainButton.show();
    // }
})

btn5.addEventListener("click", function (){

    btn5.style.display = "none";
    plus_minus5.style.display = "flex";
    counter5.style.display = "flex";
    counter5.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 5!');
    //     item = "5";
    //     tg.MainButton.show();
    // }
})

btn6.addEventListener("click", function (){

    btn6.style.display = "none";
    plus_minus6.style.display = "flex";
    counter6.style.display = "flex";
    counter6.innerText = "1";

    // if (tg.MainButton.isVisible){
    //     tg.MainButton.hide();
    // }
    // else {
    //     tg.MainButton.setText('Ви вибрали товар 6!');
    //     item = "6";
    //     tg.MainButton.show();
    // }
})

let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
let plus5 = document.getElementById("plus5");
let plus6 = document.getElementById("plus6");

plus1.addEventListener("click", function () {

    counter1.innerText = Number(counter1.innerText) + 1;
    
})

plus2.addEventListener("click", function () {

    counter2.innerText = Number(counter2.innerText) + 1;

})

plus3.addEventListener("click", function () {

    counter3.innerText = Number(counter3.innerText) + 1;

})

plus4.addEventListener("click", function () {

    counter4.innerText = Number(counter4.innerText) + 1;

})

plus5.addEventListener("click", function () {

    counter5.innerText = Number(counter5.innerText) + 1;

})

plus6.addEventListener("click", function () {

    counter6.innerText = Number(counter6.innerText) + 1;

})

let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");
let minus3 = document.getElementById("minus3");
let minus4 = document.getElementById("minus4");
let minus5 = document.getElementById("minus5");
let minus6 = document.getElementById("minus6");

minus1.addEventListener("click", function () {

    counter1.innerText = Number(counter1.innerText) - 1;

    if (Number(counter1.innerText) === 0){
        btn1.style.display = "inline-block";
        plus_minus1.style.display = "none";
        counter1.style.display = "none";
    }
})

minus2.addEventListener("click", function () {

    counter2.innerText = Number(counter2.innerText) - 1;

    if (Number(counter2.innerText) === 0){
        btn2.style.display = "inline-block";
        plus_minus2.style.display = "none";
        counter2.style.display = "none";
    }

})

minus3.addEventListener("click", function () {

    counter3.innerText = Number(counter3.innerText) - 1;

    if (Number(counter3.innerText) === 0){
        btn3.style.display = "inline-block";
        plus_minus3.style.display = "none";
        counter3.style.display = "none";
    }

})

minus4.addEventListener("click", function () {

    counter4.innerText = Number(counter4.innerText) - 1;

    if (Number(counter4.innerText) === 0){
        btn4.style.display = "inline-block";
        plus_minus4.style.display = "none";
        counter4.style.display = "none";
    }

})

minus5.addEventListener("click", function () {

    counter5.innerText = Number(counter5.innerText) - 1;

    if (Number(counter5.innerText) === 0){
        btn5.style.display = "inline-block";
        plus_minus5.style.display = "none";
        counter5.style.display = "none";
    }

})

minus6.addEventListener("click", function () {

    counter6.innerText = Number(counter6.innerText) - 1;

    if (Number(counter6.innerText) === 0){
        btn6.style.display = "inline-block";
        plus_minus6.style.display = "none";
        counter6.style.display = "none";
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function (){
    tg.sendData(item);
})
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = tg.initDataUnsafe.first_name + tg.DataUnsafe.last_name;

usercard.appendChild(p);
