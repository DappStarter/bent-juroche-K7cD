require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food point rice rural home gown light army giant'; 
let testAccounts = [
"0x2d933ccf817104793c677bddb1fb9f85422e35064a9e9d1290ab8c0ee817deb4",
"0x34dfce73f909dbeb615d2785f90c656443637a16fbe9c671df58e086a9e18329",
"0xf119cb50f56ac3f5ce412ccff842d0dffcacf174c6b8fec670cd75e1c6bef06b",
"0xdb0b530f88ddaeccd73af653ae3b5f8307f34c3f1bdd647882036ebf5d44e014",
"0xf832c5b5914246de9ce8abf2576e29f30c920025ee3c0d9ad0da51d57def2d46",
"0x3647d2a5d6d6c6293484b1f35c758f48f2e922334a054747cdc70c55d3f1119d",
"0x9acd1fdf7d2607f20e91a007e846325501d1a3e5244a0805d9218fc1259125d5",
"0x856a98cf98c58b5f642a0eaad455adbb6fc34b915a6869d2638f55bb69877ff5",
"0x7ff703f43961c2b4281b0c16867279ed603ff8e6e5dba227d4fe96e0e070352e",
"0xe997d39d5bf5c844ea5a14631b219f31d50cfe37175727c7242c6928810ca636"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


