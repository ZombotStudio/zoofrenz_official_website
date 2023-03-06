import { ZooFrenzToken as ZooFrenzTokenABI } from "./abi/ZooFrenzToken";
const contractZooFrenzToken = "0xCE141c45619e9AdBDBdDA5af19B3052Ff79d5663";
class ZooFrenzToken {
    constructor() { }
    init(web3) {
        this.web3 = web3;
    }
    contractZooFrenzToken() {
        if (!this.contract) {
            this.contract = new this.web3.eth.Contract(ZooFrenzTokenABI.abi, contractZooFrenzToken);
        }
        return this.contract;
    }
    balanceOf(address) {
        return new Promise((resolve, reject) => {
            const contract = this.contractZooFrenzToken();
            contract.methods
                .balanceOf(address)
                .call()
                .then((x) => {
                // window.console.log("balanceOf:", x);
                resolve(x);
            })
                .catch((err) => {
                // window.console.error("balanceOf:", err);
                reject(err);
            });
        });
    }
    
    tokenOfOwnerByIndex(address,index) {
        return new Promise((resolve, reject) => {
            const contract = this.contractZooFrenzToken();
            contract.methods
                .tokenOfOwnerByIndex(address,index)
                .call()
                .then((x) => {
                // window.console.log("tokensOfOwner:", x);
                resolve(x);
            })
                .catch((err) => {
                // window.console.error("tokensOfOwner:", err);
                reject(err);
            });
        });
    }
}
const zooFrenzToken = new ZooFrenzToken();
export { zooFrenzToken as ZooFrenzToken };