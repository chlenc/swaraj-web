import Web3 from 'web3';

export type TWeb3Info = { web3: Web3, network: string }

const getWeb3 = async (httpProvider?: string): Promise<TWeb3Info> => {
    const web3: Web3 = await new Promise((resolve, reject) => {
        if (httpProvider) {
            const provider = new Web3.providers.HttpProvider(httpProvider);
            const web3 = new Web3(provider);
            resolve(web3);
            return;
        }

        if ((window as any).ethereum) {
            const web3 = new Web3((window as any).ethereum);
            (window as any).ethereum
                .enable()
                .then(() => {
                    resolve(web3);
                })
                .catch((error: any) => {
                    reject(error);
                });
        } else if ((window as any).web3) {
            resolve((window as any).web3);
        }
    });

    const network = await web3.eth.net.getNetworkType();
    return {web3, network};
};


export {getWeb3}
