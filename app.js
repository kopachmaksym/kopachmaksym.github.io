let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";
let help = 0;
var dict = {};
var prices = {};

dict['a-chip PREMIUM'] = 0
dict['Datamars'] = 0
dict['animal-id min'] = 0
dict['a-chip PREMIUM cannula'] = 0
dict['a-chip PREMIUM mini'] = 0
dict['animal-id pro 2,12x12mm'] = 0

prices['a-chip PREMIUM'] = 165
prices['Datamars'] = 182
prices['animal-id min'] = 110
prices['a-chip PREMIUM cannula'] = 134
prices['a-chip PREMIUM mini'] = 182
prices['animal-id pro 2,12x12mm'] = 1

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

let order1 = document.querySelector("#order1");
let order2 = document.querySelector("#order2");
let order3 = document.querySelector("#order3");
let order4 = document.querySelector("#order4");
let order5 = document.querySelector("#order5");
let order6 = document.querySelector("#order6");

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let value4 = document.getElementById("value4");
let value5 = document.getElementById("value5");
let value6 = document.getElementById("value6");

// let video1 = document.getElementById('video1');
// video1.src = "anim/static";

// function change(element, path, time){
//
//     element = element.parentNode.querySelector("[id*=video]");
//     setTimeout(function () {element.src=path;}, time);
//     // f = document.querySelectorAll('.item');
//     // f.forEach((element) => alert(element.querySelector("label").innerText));
// }
//
// function hi (elem){
//     alert(elem.innerHTML);
// }

btn1.addEventListener("click", function (){

    btn1.style.display = "none";
    plus_minus1.style.display = "flex";
    counter1.style.display = "flex";
    counter1.innerText = "1";
    order1.style.display = "block";
    value1.innerText = prices['a-chip PREMIUM'] + "UAH";
    // video1.src = "anim/animate.gif";

    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');

        tg.MainButton.show();
    }
    dict['a-chip PREMIUM'] = 1;

})

btn2.addEventListener("click", function (){

    btn2.style.display = "none";
    plus_minus2.style.display = "flex";
    counter2.style.display = "flex";
    counter2.innerText = "1";
    order2.style.display = "block";
    value2.innerText = prices['Datamars'] + "UAH";
    
    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');
        tg.MainButton.show();
    }
    dict['Datamars'] = 1;

})

btn3.addEventListener("click", function (){

    btn3.style.display = "none";
    plus_minus3.style.display = "flex";
    counter3.style.display = "flex";
    counter3.innerText = "1";
    order3.style.display = "block";
    value3.innerText = prices['animal-id min'] + "UAH";

    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');

        tg.MainButton.show();
    }
    dict['animal-id min'] = 1;

})

btn4.addEventListener("click", function (){

    btn4.style.display = "none";
    plus_minus4.style.display = "flex";
    counter4.style.display = "flex";
    counter4.innerText = "1";
    order4.style.display = "block";
    value4.innerText = prices['a-chip PREMUIUM cannula'] + "UAH";

    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');
        tg.MainButton.show();
    }
    dict['a-chip PREMIUM cannula'] = 1;

})

btn5.addEventListener("click", function (){

    btn5.style.display = "none";
    plus_minus5.style.display = "flex";
    counter5.style.display = "flex";
    counter5.innerText = "1";
    order5.style.display = "block";
    value5.innerText = prices['a-chip PREMIUM mini'] + "UAH";

    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');
        tg.MainButton.show();
    }
    dict['a-chip PREMIUM mini'] = 1;
})

btn6.addEventListener("click", function (){

    btn6.style.display = "none";
    plus_minus6.style.display = "flex";
    counter6.style.display = "flex";
    counter6.innerText = "1";
    order6.style.display = "block";
    value6.innerText = prices['animal-id pro 2,12x12mm'] + "UAH";

    if (!tg.MainButton.isVisible){
        tg.MainButton.setText('Купити');
        tg.MainButton.show();
    }
    dict['animal-id pro 2,12x12mm'] = 1;

})

let plus1 = document.getElementById("plus1");
let plus2 = document.getElementById("plus2");
let plus3 = document.getElementById("plus3");
let plus4 = document.getElementById("plus4");
let plus5 = document.getElementById("plus5");
let plus6 = document.getElementById("plus6");

plus1.addEventListener("click", function () {

    counter1.innerText = Number(counter1.innerText) + 1;
    dict['a-chip PREMIUM'] = dict['a-chip PREMIUM'] +1 ;
    document.getElementById("order-count1").innerText = Number(counter1.innerText) + "x";

})

plus2.addEventListener("click", function () {

    counter2.innerText = Number(counter2.innerText) + 1;
    dict['Datamars'] = dict['Datamars'] +1;
    document.getElementById("order-count2").innerText = Number(counter2.innerText) + "x";

})

plus3.addEventListener("click", function () {

    counter3.innerText = Number(counter3.innerText) + 1;
    dict['animal-id min'] = dict['animal-id min'] +1 ;
    document.getElementById("order-count3").innerText = Number(counter3.innerText) + "x";

})

plus4.addEventListener("click", function () {

    counter4.innerText = Number(counter4.innerText) + 1;
    dict['a-chip PREMIUM cannula'] = dict['a-chip PREMIUM cannula'] +1 ;
    document.getElementById("order-count4").innerText = Number(counter4.innerText) + "x";

})

plus5.addEventListener("click", function () {

    counter5.innerText = Number(counter5.innerText) + 1;
    dict['a-chip PREMIUM mini'] = dict['a-chip PREMIUM mini'] +1 ;
    document.getElementById("order-count5").innerText = Number(counter5.innerText) + "x";

})

plus6.addEventListener("click", function () {

    counter6.innerText = Number(counter6.innerText) + 1;
    dict['animal-id pro 2,12x12mm'] = dict['animal-id pro 2,12x12mm'] +1 ;
    document.getElementById("order-count6").innerText = Number(counter6.innerText) + "x";

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
        order1.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

minus2.addEventListener("click", function () {

    counter2.innerText = Number(counter2.innerText) - 1;

    if (Number(counter2.innerText) === 0){
        btn2.style.display = "inline-block";
        plus_minus2.style.display = "none";
        counter2.style.display = "none";
        order2.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

minus3.addEventListener("click", function () {

    counter3.innerText = Number(counter3.innerText) - 1;

    if (Number(counter3.innerText) === 0){
        btn3.style.display = "inline-block";
        plus_minus3.style.display = "none";
        counter3.style.display = "none";
        order3.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

minus4.addEventListener("click", function () {

    counter4.innerText = Number(counter4.innerText) - 1;

    if (Number(counter4.innerText) === 0){
        btn4.style.display = "inline-block";
        plus_minus4.style.display = "none";
        counter4.style.display = "none";
        order4.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

minus5.addEventListener("click", function () {

    counter5.innerText = Number(counter5.innerText) - 1;

    if (Number(counter5.innerText) === 0){
        btn5.style.display = "inline-block";
        plus_minus5.style.display = "none";
        counter5.style.display = "none";
        order5.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

minus6.addEventListener("click", function () {

    counter6.innerText = Number(counter6.innerText) - 1;

    if (Number(counter6.innerText) === 0){
        btn6.style.display = "inline-block";
        plus_minus6.style.display = "none";
        counter6.style.display = "none";
        order6.style.display = "none";
    }

    let sum = Number(counter1.innerText) + Number(counter2.innerText) + Number(counter3.innerText);
    sum = sum + Number(counter4.innerText) + Number(counter5.innerText) + Number(counter6.innerText);

    if (sum === 0){
        tg.MainButton.hide()
    }

})

Telegram.WebApp.onEvent("mainButtonClicked", function (){

    if(help === 0){
        help = 1;
        window.Telegram.WebApp.BackButton.show();
        document.getElementById("inner").style.display = "none";
        document.getElementById("basket").style.display = "block";

        value1.innerText = (prices['a-chip PREMIUM']*Number(counter1.innerText)) + "UAH";
        value2.innerText = (prices['Datamars']*Number(counter2.innerText)) + "UAH";
        value3.innerText = (prices['animal-id min']*Number(counter3.innerText)) + "UAH";
        value4.innerText = (prices['a-chip PREMIUM cannula']*Number(counter4.innerText)) + "UAH";
        value5.innerText = (prices['a-chip PREMIUM mini']*Number(counter5.innerText)) + "UAH";
        value6.innerText = (prices['animal-id pro 2,12x12mm']*Number(counter6.innerText)) + "UAH";
     
        document.getElementById("order-count1").innerText = Number(counter1.innerText) + "x";
        document.getElementById("order-count2").innerText = Number(counter2.innerText) + "x";
        document.getElementById("order-count3").innerText = Number(counter3.innerText) + "x";
        document.getElementById("order-count4").innerText = Number(counter4.innerText) + "x";
        document.getElementById("order-count5").innerText = Number(counter5.innerText) + "x";
        document.getElementById("order-count6").innerText = Number(counter6.innerText) + "x";
        
    }
    else {
        let v = "";
        for (const [key, value] of Object.entries(dict)){
            v = v + "#" + key + ":" + value + ":" + prices[key];
        }
        v = v + ' <' + 'comment' + '>' + document.getElementById("commentary").value + '<' + 'comment' + '>';
        tg.sendData(v);

    }
})

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function click_edit(){
    help = 0;
    document.getElementById("inner").style.display = "grid";
    document.getElementById("basket").style.display = "none";
    window.Telegram.WebApp.BackButton.hide();
}

Telegram.WebApp.onEvent("backButtonClicked", function (){

    help = 0;
    document.getElementById("inner").style.display = "grid";
    document.getElementById("basket").style.display = "none";
    window.Telegram.WebApp.BackButton.hide();
    
})
