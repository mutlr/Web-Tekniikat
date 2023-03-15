const money = document.getElementById("money");
const slider = document.getElementById("tip");
const total = document.getElementById("total");
const tipResult = document.getElementById("tip-result");
const tipPercentage = document.getElementById("tip-percentage");

slider.addEventListener("mousemove", () => {
    if (isNaN(Number(money.value))) {
        tipResult.innerText = "Not a number";
        total.innerText = "Enter a number";
        return
    }
    console.log(slider.value + "H");
    let amount = Number(money.value);
    let tip = amount * ((Number(slider.value)) / 100);
    tipPercentage.innerText = slider.value + "%";
    tipResult.innerText = tip.toFixed(2);
    total.innerText = (tip + amount).toFixed(2);
});