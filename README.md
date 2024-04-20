# Project summary
Nextjs x TypeScript x Hardhat x chainlink を用いてNFTの販売・購入サイトを作成（マケプレ？RWA？）

https://github.com/unchain-tech/UNCHAIN-projects/tree/main/docs/AVAX-Asset-Tokenization/ja/section-0


# Command summary
### ./
```
yarn init --private -y
tsc --init
```

### ./packages/contract/
```
yarn init --private -y
yarn add --dev @nomicfoundation/hardhat-chai-matchers@^1.0.6 @nomicfoundation/hardhat-network-helpers@^1.0.8 @nomicfoundation/hardhat-toolbox@^2.0.0 @nomiclabs/hardhat-ethers@^2.2.3 @nomiclabs/hardhat-etherscan@^3.1.7 @openzeppelin/test-helpers@^0.5.16 @typechain/ethers-v5@^11.0.0 @typechain/hardhat@^7.0.0 @types/chai@^4.3.5 @types/mocha@^10.0.1 hardhat@^2.12.2 hardhat-gas-reporter@^1.0.8 solidity-coverage@^0.8.1 ts-node@^10.9.1 typechain@^8.1.0
yarn add dotenv @openzeppelin/contracts@^4.7.3 @chainlink/contracts@^0.5.1
npx hardhat init
```

### ./packages/
```
yarn create next-app client --ts
```

### ./packages/client/
```
yarn add ethers@^5.7.2 @metamask/providers@^10.0.0 react-icons@^4.6.0
```

### ./
```
yarn install
yarn client dev
yarn contract deploy
```

# Refs
chainlink automation (fuji)
https://automation.chain.link/fuji

## Faucet
AVAX
https://core.app/tools/testnet-faucet?subnet=c&token=c

AVAX + LINK
https://faucets.chain.link/fuji