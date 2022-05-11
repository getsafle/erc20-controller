const axios = require('axios');
const { COINGECKO_BASE_URL } = require('../config');


async function getRequest({ url }) {
  try {
    const response = await axios({
        url,
        method: 'GET',
    });

    return { response: response.data };
  } catch (error) {
    return { error: error.response };
  }
}

async function getUserTokenDataApi({chain, contractAddress}){
  switch (chain) {
    case 'ethereum': {
       let url =  `${COINGECKO_BASE_URL}/coins/ethereum/contract/${contractAddress}`;

        return url;
    }
    case 'polygon':{
      let url =  `${COINGECKO_BASE_URL}/coins/polygon-pos/contract/${contractAddress}`;

      return url;
    }
    case 'bsc':{
      let url =  `${COINGECKO_BASE_URL}/coins/binance-smart-chain/contract/${contractAddress}`;

      return url;
    }
    default: {
        return { error: INVALID_CHAIN_SELECTED };
    }
}
}


module.exports = {
    getRequest, getUserTokenDataApi
};

