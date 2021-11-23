import { generateWallet } from '@tatumio/tatum-eth'

const TESTNET = true;

generateWallet(TESTNET)
    .then(console.log)