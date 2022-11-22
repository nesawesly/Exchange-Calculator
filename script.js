
const currencyOne = document.getElementById("currency-one")
const currencyOneAmount = document.getElementById("amount-one")
const currencyTwo = document.getElementById("currency-two")
const currencyTwoAmount = document.getElementById("amount-two")
const swap = document.getElementById("swap")
const rate = document.getElementById("swap-rate")


function calculate (){
    const currency1 = currencyOne.value
    const currency2 = currencyTwo.value
    fetch(`https://v6.exchangerate-api.com/v6/c334db27eed53173ff9458d8/latest/${currency1}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates[currency2]
        rate.innerText = `1 ${currency1} = ${rates} ${currency2}`
        currencyTwoAmount.value = (currencyOneAmount.value * rates).toFixed(2)
    }
        )
}
    


currencyOne.addEventListener("change", calculate)
currencyTwo.addEventListener("change", calculate)
currencyOneAmount.addEventListener("input", calculate)
currencyTwoAmount.addEventListener("input", calculate)
swap.addEventListener("click", ()=> {
    const temp = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = temp
    calculate()
})

calculate()