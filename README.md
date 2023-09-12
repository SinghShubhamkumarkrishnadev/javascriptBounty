**JavaScript File: Bank Account Management**

**Class-Based Structure:**

The heart of this JavaScript file is the `BankAccount` class, which adheres to Object-Oriented Programming principles. This class encapsulates the data and behavior associated with a bank account.

1. **Properties:**

   - `accountHolder`: This property stores the account holder's name.
   - `accountType`: It holds the account type, such as "Savings" or "Checking."
   - `balance`: This property represents the current balance of the account.

   This class efficiently bundles these properties, ensuring they are logically organized and encapsulated.

2. **Methods:**

   - `deposit(amount)`: This method allows users to deposit funds into their account. It performs essential checks to ensure the amount is valid (greater than zero and not NaN) and updates the account balance accordingly.

   - `withdraw(amount)`: Users can utilize this method to withdraw funds. It performs rigorous validation, ensuring the withdrawal amount is valid (greater than zero, not NaN, and not exceeding the current balance). It then updates the balance accordingly.

This class-based structure not only provides a neat and organized way to manage account-related data but also promotes code reusability and maintainability.

**Switch Statements for User Actions:**

The JavaScript file effectively uses a `switch` statement to handle different user actions:

- **Deposit**: When the user selects "Deposit" from the action dropdown, the corresponding case executes the `deposit` method of the `BankAccount` class, facilitating the addition of funds to the account.

- **Withdraw**: The "Withdraw" case invokes the `withdraw` method, enabling users to withdraw funds, provided the withdrawal amount is valid.

- **Check Balance**: The "Check Balance" case does not perform any specific action but allows users to view their current balance.

- **Default**: In the default case, an error message is generated for invalid actions, ensuring that the user receives clear feedback.

This `switch` statement enhances code readability and maintainability by neatly organizing action-related logic.

**Try-Catch-Finally Statements for Error Handling:**

Robust error handling is a key feature of this JavaScript file, which employs `try-catch-finally` statements to ensure a smooth and secure user experience:

- **Try Block**: Within the `try` block, each user action is attempted. This includes depositing, withdrawing, and checking the balance.

- **Catch Block**: In the event of an error, such as an invalid amount or insufficient funds, the `catch` block captures the error and generates user-friendly error messages. This ensures that users receive clear and informative feedback about the nature of the issue.

- **Finally Block**: The `finally` block guarantees that specific actions are taken regardless of whether an error occurred or not. It clears the input fields after each transaction, offering users a seamless and clean interface for subsequent actions.

These error-handling mechanisms contribute to the website's robustness, enhancing user trust and confidence in the platform.
