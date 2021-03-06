Design Patterns Used:

## Circuit Breaker
Circuit Breakers are design patterns that allow contract functionality to be stopped. This would be desirable in situations where there is a live contract where a bug has been detected. Freezing the contract would be beneficial for reducing harm before a fix can be implemented.

An emergency stop was implemented for the sake of best practice: Pausable from Open Zeppelin https://openzeppelin.org/api/docs/lifecycle_Pausable.html

![Screenshot](DesignPattern.jpg)

## Mortal Design Pattern
Implementing the mortal design pattern means including the ability to destroy the contract and remove it from the blockchain.
You can destroy a contract using the selfdestruct keyword. The function to do it is often called kill. It takes one parameter which is the address that will receive all of the funds that the contract currently holds. As an irreversible action, restricting access to this function is important. In this example, only the owner has access to this.

![Screenshot](Mortal.jpg)

## Justification

Choosing these design patterns made sense in the event that certain token-related issues were to come about. Mortal gives the contract owner the ability to kill the smart contract if something were to go wrong. Circuit Breaker is fantastic if tokens were to get stolen. With Pausable, we are able to freeze the tokens in the contract address of the theif.
