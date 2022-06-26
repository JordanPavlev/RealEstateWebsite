var menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times')
}

window.onscroll = () => {
      navbar.classList.remove('active');
    menu.classList.remove('fa-times')
}

const rentValues= () => {
    var rentAreas = document.getElementById('area')
    var rentCountrys = document.getElementById('country')
    rentAreas.placeholder = 'Neighbourhood';
    rentCountrys.placeholder = 'City'
}
const sellValues = () => {
    var sellAreas = document.getElementById('country')
    var sellCountrys = document.getElementById('area')
        sellAreas.placeholder = 'Country'
        sellCountrys.placeholder = 'City'
}
const rentButton = document.getElementById("forRent");
rentButton.addEventListener("click", rentValues);

const sellButton = document.getElementById("forSell");
sellButton.addEventListener("click", sellValues);

const rentStatus = () => {
    var rentValue = document.getElementById("status");
    rentValue[0].innerHTML = "Rent status"
    rentValue[1].innerHTML = "For one night";
    rentValue[2].innerHTML = "For couples";
    rentValue[3].innerHTML = "Party house";
    rentValue[4].innerHTML = "For longer period";
    rentValue[5].innerHTML = "Pay as you go";
}
rentButton.addEventListener("click", rentStatus);

const sellStatus = () => {
    var sellValue = document.getElementById("status");
    sellValue[0].innerHTML = "Sell status"
    sellValue[1].innerHTML = "Beautiful neighbourhood";
    sellValue[2].innerHTML = "Unfinished";
    sellValue[3].innerHTML = "House with/out gardens";
    sellValue[4].innerHTML = "Apartments";
    sellValue[5].innerHTML = "Older or abandoned";
}
sellButton.addEventListener("click", sellStatus)

const rentPersons = () => {
    var rentPerson = document.getElementById("Person");
    rentPerson[0].innerHTML = "Number of persons"
    rentPerson[1].innerHTML = "1";
    rentPerson[2].innerHTML = "2";
    rentPersons[3].innerHTML = "3";
    rentPersons[4].innerHTML = "4";
    rentPersons[5].innerHTML = "5";
}
rentButton.addEventListener("click", rentPersons)

const sellType = () => {
    var selling = document.getElementById("Person");
    selling[0].innerHTML = "Seller"
    selling[1].innerHTML = "Our agency";
    selling[2].innerHTML = "Person";
    selling[3].innerHTML = "Succesor";
    selling[4].innerHTML = "Beneficiary";
    selling[5].innerHTML = "Other agency";
}
sellButton.addEventListener("click", sellType)

const rentTypeOf = () => {
    var renttype = document.getElementById("typee");
    renttype[0].innerHTML = "Type of rent estate";
}
const sellTypeOf = () => {
    var selltype = document.getElementById("typee");
    selltype[0].innerHTML = "Type of the selling estate";
}
sellButton.addEventListener("click", sellTypeOf);
rentButton.addEventListener("click", rentTypeOf);

const searchSell = () => {
    var btn = document.getElementById("submit-btn");
    btn.value = "Search for sell";
}
const searchRent = () => {
    var btn = document.getElementById("submit-btn");
    btn.value = "Search for rent";
}
sellButton.addEventListener("click", searchSell);
rentButton.addEventListener("click", searchRent);



