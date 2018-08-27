Design Patterns Used:

## Circuit Breaker
Circuit Breakers are design patterns that allow contract functionality to be stopped. This would be desirable in situations where there is a live contract where a bug has been detected. Freezing the contract would be beneficial for reducing harm before a fix can be implemented.

An emergency stop was implemented for the sake of best practice: Pausable from Open Zeppelin https://openzeppelin.org/api/docs/lifecycle_Pausable.html
