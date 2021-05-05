# **Safle Token Controller**

Safle Token Controller SDK


## **Installation and Usage**

> Installation

Install the package by running the command,

`npm install @getsafle/token-controller`

Import the package into your project using,

`const safleTokenController = require('@getsafle/token-controller');`

## **Token Controller**

> Initialising

Initialise the class using,

`const tokenController = new safleTokenController.Erc20Controller();` 


> Methods

Get Token Details

`const tokenDetails = await tokenController.getTokenDetails(contractAddress);`

* `contractAddress` - Token Contract Address

