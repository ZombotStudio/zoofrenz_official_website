import { FrenshipToken as FrenshipTokenABI } from "./abi/FrenshipToken";
const contractFrenshipToken = "0x1f5C8F58d92854a50Ce505CF5A52616B12BDa01E";
class FrenshipToken {
    constructor() { }
    init(web3) {
        this.web3 = web3;
    }
    contractFrenshipToken() {
        if (!this.contract) {
            this.contract = new this.web3.eth.Contract(FrenshipTokenABI.abi, contractFrenshipToken);
        }
        return this.contract;
    }    
    balanceOf(address) {
        return new Promise((resolve, reject) => {
            const contract = this.contractFrenshipToken();
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
}
const frenshipToken = new FrenshipToken();
export { frenshipToken as FrenshipToken };