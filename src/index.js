const HELPER = require('./utils/helper');

class Erc20Controller {
    async getTokenDetails(contractAddress) {
        const url = await HELPER.getUserTokenDataApi({ contractAddress });
        const { response, error } = await HELPER.getRequest({ url });
        if (error) {
            return { error };
        }

        return response;
    }
}

module.exports = { Erc20Controller: Erc20Controller }