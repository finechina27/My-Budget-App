// Create starter values
let monthlyIncome = 0;
let expenses = [] // An array of expense objects
let expenseTotal = 0;
let balance = 0;

// Add references to HTML  elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

// Build a function that stores a monthly budget value and displays it in the app
function updateBudget(event) {
    console.log("Update Budget Fired");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); // convert string to a number
    monthlyBudget.innerText = "$" + monthlyIncome; // Display in the app
    //  Re-calculate the remaining balance
    updateBalance();
}

// Add updateBudget to update button onclick
updateBudgetButton.onclick = updateBudget;

// Build a helper function that will calculate the remaining balance and display it in the app 
function updateBalance() {
    console.log("Update Balance Fired");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance; // Dislay in app
    //Update color of text based on balance
    if (balance <0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }
    }

// Build a function that will create a new expense and add it  to the app
function addExpense(event) {
    console.log("Add Expense fired.");
    event.preventDefault();
    // Build a new expense object
    let expense = {
        name: nameInput.value, // text 
        amount: parseInt(amountInput.value) // convert to number
    };

    // Add to expense array
    expenses.push(expense);
    //Display in the app
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    // Calculate expense total
    updateExpenseTotal();
}

// AddExpense as onclick handler to Add Expense  button
addExpenseButton.onclick = addExpense;

// Build a function that adds the expenses in the expense list and displays the total in the app
function updateExpenseTotal() {
console.log("Update Expense fired."); 
    expenseTotal = 0; // Reset 
    // Interate oer the expense objects and re-calculate
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    // Display the new result in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the remaining balance
    updateBalance();
}
