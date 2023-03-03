import { ZoofrenzFirstClassPass as ZoofrenzFirstClassPassABI } from "./abi/ZoofrenzFirstClassPass";
const contractZoofrenzFirstClassPass = "0x6E334adF384D29bc1464dcf7ccCD382dA3d834bb";
class ZoofrenzFirstClassPass {
    constructor() { }
    init(web3) {
        this.web3 = web3;
    }
    contractZoofrenzFirstClassPass() {
        if (!this.contract) {
            this.contract = new this.web3.eth.Contract(ZoofrenzFirstClassPassABI.abi, contractZoofrenzFirstClassPass);
        }
        return this.contract;
    }
    balanceOf(address) {
        return new Promise((resolve, reject) => {
            const contract = this.contractZoofrenzFirstClassPass();
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
const zoofrenzFirstClassPass = new ZoofrenzFirstClassPass();
export { zoofrenzFirstClassPass as ZoofrenzFirstClassPass };