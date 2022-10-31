# Safle Token Controller

Safle Token Controller SDK

## Installation

To install this SDK,

```js
npm install --save @getsafle/token-controller
```

## Initialization

Initialize the constructor,

```js
const safleTokenController = require('@getsafle/token-controller');

const tokenController = new safleTokenController.Erc20Controller();
```

<br>

> Get Token Details

<br>

This function returns the complete details about a particular token that coingecko provides

```js
const tokenDetails = await tokenController.getTokenDetails({ chain, contractAddress });
```

* `chain` - The chain where the token is deployed to
* `contractAddress` - Token Contract Address

<br>

> Supported chains

* `ethereum`
* `polygon`
* `bsc`
