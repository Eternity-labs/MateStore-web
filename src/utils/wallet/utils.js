const netWork = [
  {
    name: 'Polygon',
    chainId: 137
  },
  {
    name: 'Polygon Test',
    chainId: 80001
  }
]
const netArgs = {
  mainNet: {
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x89',
        chainName: 'Matic Mainnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com/']
      }
    ]
  },
  testNet: {
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x13881',
        chainName: 'Polygon Testnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
        blockExplorerUrls: ['https://polygonscan.com/']
      }
    ]
  }
}

function getNetWork (netId) {
  let net = ''
  netWork.forEach(item => {
    if (item.chainId === netId) {
      net = item
    }
  })
  return net
}

export default {
  getNetWork,
  netArgs
}
