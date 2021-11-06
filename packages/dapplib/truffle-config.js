require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name repeat saddle equip half another army genius'; 
let testAccounts = [
"0x3d315212a79968976cf4fb073de186e48c2445ed61af3991c98f899cbac68c0c",
"0x81e28ad1073913b3039238ffaaa8a5d1f93596cdfc3b61387c7e97defd8ab40b",
"0xa32dffaa95570709db03bf65901c3f1993107cb19089590b44dbdf79e62c35a2",
"0x9bc38ea9135ae1432731e4baf2242625f9535da481c7c83afe22710a5277f1bf",
"0xc0a8d82bda7e6e8ae2e02e0865632bdc34f74d985903c50bdc7985272fae5bf7",
"0xa8107fa3e756e35fc0a2ac36b609bc0e84531b46a02d559a6a09f81145401376",
"0x1a10b11d2106f8daa50c40793183be573f63f3fc26e17552e579ebadb4bbfcd2",
"0xc36e4d2bd43c63f368a759be40b7d513f27739aa8c3662d7bf1838ba26b072ba",
"0x079ecae72b884a362f8c8616246023926f5f5d295204bc113680361cc4653acf",
"0xa37e6428c00876e327c0a746b2619c0b8d132d8e6e6ebf99b48c86651e526622"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

