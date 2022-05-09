const HELPER = require('./utils/helper');

class Erc20Controller {
    async getTokenDetails({ chain,contractAddress }) {
        const url = await HELPER.getUserTokenDataApi({ chain, contractAddress });
        const { response, error } = await HELPER.getRequest({ url });
        if (error) {
            return { error };
        }

        return response;
    }
}

module.exports = { Erc20Controller: Erc20Controller }