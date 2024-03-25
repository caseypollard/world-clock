function updateTime(){
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("hh:mm:ss [<small>]A[<small>]");


let hobartElement = document.querySelector("#hobart");
let hobartDateElement = hobartElement.querySelector(".date");
let hobartTimeElement = hobartElement.querySelector(".time");
let hobartTime = moment().tz("Australia/Hobart");

hobartDateElement.innerHTML = hobartTime.format("MMMM Do, YYYY");
hobartTimeElement.innerHTML = hobartTime.format("hh:mm:ss [<small>]A[<small>]");


let copenhagenElement = document.querySelector("#copenhagen");
let copenhagenDateElement = copenhagenElement.querySelector(".date");
let copenhagenTimeElement = copenhagenElement.querySelector(".time");
let copenhagenTime = moment().tz("Europe/Copenhagen");

copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do, YYYY");
copenhagenTimeElement.innerHTML = copenhagenTime.format("hh:mm:ss [<small>]A[<small>]");
}

updateTime();
setInterval(updateTime, 1000);