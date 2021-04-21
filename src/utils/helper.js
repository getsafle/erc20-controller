const axios = require('axios');
const { COINGEKO_BASE_URL } = require('../config');


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

async function getUserTokenDataApi({ contractAddress }){
    return `${COINGEKO_BASE_URL}/coins/ethereum/contract/${contractAddress}`;
}

module.exports = {
    getRequest, getUserTokenDataApi,
};

