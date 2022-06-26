const buttonBuy = document.getElementById("Buy");
const buttonSell = document.getElementById("Sell");
const buttonRent = document.getElementById("Rent");
const buttonMortgage = document.getElementById("Mortgage");
const h1 = document.getElementById("h1-div");
const input = document.getElementById("input-div");
const defaulth1 = document.getElementById("");

buttonBuy.addEventListener("click", () => {
    h1.innerHTML = `<h1 id="default-h1">Find homes first.<br> Tour homes fast</h1>`
    input.innerHTML = `<input type="text" placeholder="City, Address, School, Agent, ZIP" id="default-input"/><button type="submit" id="submit-btn">Submit</button>`
    
});

buttonSell.addEventListener("click", () => {
    h1.innerHTML = `<h1 id="default-h1">1% listing fee <br> when you buy + sell</h1>`;
    input.innerHTML = `<input type="text" placeholder="Enter your street address" id="default-input"><button Submit type="submit" id="sell-btn">Next</button>`
})

buttonRent.addEventListener("click", () => {
    h1.innerHTML = `<h1 id="default-h1">Local rentals <br> at your fingertips</h1>`;
    input.innerHTML = `<input type="text" placeholder="City, Address, School, Agent, ZIP" id="default-input"><button Submit type="submit" id="submit-btn">Submit</button>`
})

buttonMortgage.addEventListener("click", () => {
    h1.innerHTML = `<h1 id="default-h1">Compare lenders <br> and find a low rate</h1>`;
    input.innerHTML = `<input type="text" placeholder="City, Country, ZIP" id="default-input"><button Submit type="submit" id="submit-btn">Submit</button>`
})

let btn = document.getElementById("button1");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
}
