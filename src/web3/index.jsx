import React from 'react';
import Web3 from 'web3';

const Web = () => {
  const getProviderConnection = () => {
    let provider;
    if (window.ethereum.providers !== undefined) {
      const providerLength = window.ethereum.providers.length;
      provider = window.ethereum.providers[providerLength - 1];
    } else {
      provider = window.ethereum;
    }
    return provider;
  };
  console.log('getProviderConnection>>>', getProviderConnection());

  const connectWallet = async () => {
    let provider = getProviderConnection();
    const account = await provider.request({
      method: 'eth_requestAccounts',
    });
    return account[0];
  };
  console.log('connectWallet', connectWallet());
  ///////////////////////////////////////////////////////////////////////////////
  return <div>Web</div>;
};

export default Web;
