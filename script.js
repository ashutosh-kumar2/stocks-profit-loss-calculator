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
        outputBox.style.color = "red";
        showOutput(`Whoops! Your loss is ${loss} and the loss percentage is ${lossPercentage}% 😞`);
    }
    else if (current > initial)
    {
        var profit = (current - initial) * quantity;
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        outputBox.style.color = "green";
        showOutput(`Yay! Your profit is ${profit} and the profit percentage is ${profitPercentage}% 🚀`);
    }
    else
    {
        outputBox.style.color = "black";
        showOutput("No pain No gain, and No gain No pain! 😉");
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
            outputBox.style.color = "black";
            showOutput("No negative values allowed!!");
        }
        else
            calculateProfitAndLoss(init, qty, curr);
    }
    else
    {
        outputBox.style.color = "black";
        showOutput("Please fill out all the fields!");
    }
}

function showOutput(message) {
    outputBox.innerText = message;
}

submitButton.addEventListener('click', submitHandler);