import { ethGetTransaction } from '@tatumio/tatum-eth'
import { config } from 'dotenv'

config()

const TX_HASH = '0x3b859c26a99d7cffdfa954b78f68f2bb09580a773c5e6950cb5b797fe35bbb69';

ethGetTransaction(TX_HASH)
.then(console.log);