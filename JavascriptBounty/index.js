class BankAccount {
    constructor(accountHolder, accountType, balance) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = balance;
    }

    deposit(amount) {
        if (isNaN(amount) || amount <= 0) {
            throw new Error("Invalid amount for deposit.");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (isNaN(amount) || amount <= 0 || amount > this.balance) {
            throw new Error("Invalid amount for withdrawal.");
        }
        this.balance -= amount;
    }
}

const account = new BankAccount("Shubham Singh", "Savings", 10000.00);

function updateAccountInfo() {
    document.getElementById("account-holder").textContent = account.accountHolder;
    document.getElementById("account-type").textContent = account.accountType;
    document.getElementById("balance").textContent = account.balance.toFixed(2);
}

function executeAction() {
    const action = document.getElementById("action").value;
    const amount = parseFloat(document.getElementById("amount").value);

    try {
        switch (action) {
            case "deposit":
                account.deposit(amount);
                break;
            case "withdraw":
                account.withdraw(amount);
                break;
            case "checkBalance":
                document.getElementById("message").textContent = `Current Balance: $${account.balance.toFixed(2)}`;
                return;           
            default:
                throw new Error("Invalid action selected.");
        }

        updateAccountInfo();
        document.getElementById("message").textContent = `Action successful.`;
    } catch (error) {
        document.getElementById("message").textContent = `Error: ${error.message}`;
    } finally {
        // Clear the input fields
        document.getElementById("amount").value = "";
    }
}

document.getElementById("execute").addEventListener("click", executeAction);

updateAccountInfo();
