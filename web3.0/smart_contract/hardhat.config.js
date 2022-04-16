//https://eth-ropsten.alchemyapi.io/v2/gS4f3QfFChjqIFClLtdXhsAk38n_LVLR

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/gS4f3QfFChjqIFClLtdXhsAk38n_LVLR',
      accounts: ['b129d7b2eee328409a4b3fec7240476e6b3f6f0a61ff95849d5488821b5b2015']
    }
  }
}
