function costValue(moneyCosting) {
    const CostingAmount = document.getElementById(moneyCosting);
    const priceText = CostingAmount.value;
    const Price = parseFloat(priceText);
    if (Price < -1) {
        document.getElementById('positive-error').style.display = 'block';
    }
    else if (isNaN(Price)) {
        document.getElementById('string-error').style.display = 'block';

    }
    return Price;
};




document.getElementById('calculation-button').addEventListener('click', function () {
    const inputIncomeAmount = document.getElementById('income-field');
    const incomeTextValue = inputIncomeAmount.value;


    inputValueFood = costValue('food-input');

    inputValueRent = costValue('rent-input');

    inputValueClothes = costValue('clothes-input');


    // total expenses 
    const totalExpensesAmount = inputValueFood + inputValueRent + inputValueClothes;


    // balance total after expenses 
    const totalBalanceAmount = incomeTextValue - totalExpensesAmount;

    //  set inner text for total expences 
    const totalExpensesText = document.getElementById('total-expenses');
    const totalExpansesText = totalBalanceAmount.innerText;
    const totalExpensesPrice = parseFloat(totalExpansesText);

    // total expanses balance
    totalExpensesText.innerText = totalExpensesAmount;
    //  set inner text for balance money 
    const balance = document.getElementById('balance');
    const balanceAmountText = balance.innerText;
    const totalBalanceAmountText = parseFloat(balanceAmountText);

    // My Balance Amount
    balance.innerText = totalBalanceAmount;

    if (incomeTextValue < totalExpensesAmount) {
        document.getElementById('expenses-error').style.display = 'block';

    }
});

document.getElementById('save-button').addEventListener('click', function () {
    const inputIncomeAmount = document.getElementById('income-field');
    const inputIncomeValue = inputIncomeAmount.value;

    // for saved balance
    const savedTotalBalanceText = document.getElementById('saved-balance');
    const savedTotalBalanceValue = savedTotalBalanceText.innerText;
    const savedBalance = parseFloat(savedTotalBalanceValue);

    // for percentage
    const totalPercentage = document.getElementById('percentage');
    const percentageValue = totalPercentage.value;
    const percentageDisplayText = parseFloat(percentageValue);

    //for error massage
    if (isNaN(percentageDisplayText)) {
        alert('plz input a number')
    }
    else if (percentageDisplayText < -1) {
        alert('plz input a positive number')
    }



    const totalSavedBalance = inputIncomeAmount.value / 100 * percentageDisplayText;
    savedTotalBalanceText.innerText = totalSavedBalance;



    // for balance money
    const totalBalanceAmount = document.getElementById('balance');
    const balanceAmountText = totalBalanceAmount.innerText;
    const balanceAmountTotal = parseFloat(balanceAmountText);

    //for remaining ballance
    const remainingBalanceAmount = document.getElementById('remaining-balance');
    const remainingBalanceAmountText = remainingBalanceAmount.innerText;
    const remainingTotalValue = parseFloat(remainingBalanceAmountText);
    const totalBalanceRemaining = balanceAmountTotal - totalSavedBalance;
    remainingBalanceAmount.innerText = totalBalanceRemaining;

    // for error part 
    if (balanceAmountTotal < totalSavedBalance) {
        alert('you cant save more balance then your extera balance')
    }

    //for clear percentage value input
    totalPercentage.value = '';

});

