const HDWalletProvider = require("truffle-hdwallet-provider");
const LoomTruffleProvider = require('loom-truffle-provider');
const mnemonic = "YOUR MNEMONIC HERE";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    loom_testnet: {
      provider: function () {
        const privateKey = //private key via env;
          const chainId = 'extdev-plasma-us1';
        const writeUrl = 'wss://extdev-basechain-us1.dappchains.com/websocket';
        const readUrl = 'wss://extdev-basechain-us1.dappchains.com/queryws';

        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
        loomTruffleProvider.createExtraAccountsFromMnemonic(mnemonic, 10);
        return loomTruffleProvider;
      },
      network_id: '9545242630824'
    }
  }
};
