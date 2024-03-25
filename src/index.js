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

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
        <div class="time">${cityTime.format("hh:mm:ss [<small>]A[<small>]")}</div>
    </div> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);