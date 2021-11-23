import { ethGetAccountBalance } from '@tatumio/tatum-eth'
import { config } from 'dotenv'

config()

const ADDRESS = '0x56fea30c48B8737b1CFe220E52D968C3D7BBD865';

ethGetAccountBalance(ADDRESS)
.then(console.log);