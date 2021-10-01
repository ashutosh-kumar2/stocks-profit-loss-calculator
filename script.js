var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-button");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current)
{
    if (initial > current)
    {
        var loss = (initial - current) * quantity;
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
        showOutput(`Hey! the loss is ${loss} and the loss perecentage is ${lossPercentage}%;`);
        outputBox.style.color = "red";
    }
    else if (current > initial)
    {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        showOutput(`Hey! the profit is ${profit} and the profit perecentage is ${profitPercentage}%`);
        outputBox.style.color = "green";
    }
    else
    {
        showOutput("No Pain No Gain & No Gain No Gain!");
    }   
}
    
function submitHandler()
{
    var init = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if(init && qty && curr)
    {
        if(init < 0 || qty < 0 || curr < 0)
        {
            showOutput("No negative values allowed!!");
        }
        else
            calculateProfitAndLoss(init, qty, curr);
    }
    else
    {
        showOutput("Please fill out all the fields!");
    }
}

function showOutput(message) {
    outputBox.innerText = message;
}

submitButton.addEventListener('click', submitHandler);