import { AwakenedZoofrenz as AwakenedZoofrenzABI } from "./abi/AwakenedZoofrenz";
const contractAwakenedZoofrenz = "0x44ab21cb8972c7b783dda32e93ed8a9075da8e6f";
class AwakenedZoofrenz {
    constructor() { }
    init(web3) {
        this.web3 = web3;
    }
    contractAwakenedZoofrenz() {
        if (!this.contract) {
            this.contract = new this.web3.eth.Contract(AwakenedZoofrenzABI.abi, contractAwakenedZoofrenz);
        }
        return this.contract;
    }
    // defaultAccount() {
    //     return this.web3.defaultAccount;
    // }
    // setUnrevealURI(uri) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     contract.methods
    //         .setUnrevealURI(uri)
    //         .call()
    //         .then((x) => {
    //         window.console.log("setUnrevealURI:", x);
    //         contract.methods
    //             .setUnrevealURI(uri)
    //             .send({ from: this.defaultAccount() })
    //             .then((x) => {
    //             window.console.log("setUnrevealURI:", x);
    //         })
    //             .catch((err) => {
    //             window.console.error("setUnrevealURI:", err);
    //         });
    //     })
    //         .catch((err) => {
    //         window.console.error("setUnrevealURI:", err);
    //     });
    // }
    // setBaseURI(uri) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     contract.methods
    //         .setBaseURI(uri)
    //         .call()
    //         .then((x) => {
    //         window.console.log("setBaseURI:", x);
    //         contract.methods
    //             .setBaseURI(uri)
    //             .send({ from: this.defaultAccount() })
    //             .then((x) => {
    //             window.console.log("setBaseURI:", x);
    //         })
    //             .catch((err) => {
    //             window.console.error("setBaseURI:", err);
    //         });
    //     })
    //         .catch((err) => {
    //         window.console.error("setBaseURI:", err);
    //     });
    // }
    // setRarities(ids, rarities) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     contract.methods
    //         .setRarities(ids, rarities)
    //         .call()
    //         .then((x) => {
    //         window.console.log("setRarities:", x);
    //         contract.methods
    //             .setRarities(ids, rarities)
    //             .send({ from: this.defaultAccount() })
    //             .then((x) => {
    //             window.console.log("setRarities:", x);
    //         })
    //             .catch((err) => {
    //             window.console.error("setRarities:", err);
    //         });
    //     })
    //         .catch((err) => {
    //         window.console.error("setRarities:", err);
    //     });
    // }
    // devMintAwakenedZoofrenz(amount, allowAmount, ticket, signature) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     window.console.log("contract:", contract);
    //     const d = new Date();
    //     const exipreTime = d.valueOf();
    //     window.console.log("amount:", amount);
    //     window.console.log("allowAmount:", allowAmount);
    //     window.console.log("ticket:", ticket);
    //     window.console.log("exipreTime:", exipreTime);
    //     window.console.log("signature:", signature);
    //     contract.methods
    //         .devMint(amount, ticket, this.defaultAccount())
    //         .send({ from: this.defaultAccount() })
    //         .then((x) => {
    //         window.console.log("devMint:", x);
    //     })
    //         .catch((err) => {
    //         window.console.error("devMint:", err);
    //     });
    // }
    // mintAwakenedZoofrenz(amount, allowAmount, ticket, signature) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     window.console.log("contract:", contract);
    //     const d = new Date();
    //     const exipreTime = d.valueOf();
    //     window.console.log("amount:", amount);
    //     window.console.log("allowAmount:", allowAmount);
    //     window.console.log("ticket:", ticket);
    //     window.console.log("exipreTime:", exipreTime);
    //     window.console.log("signature:", signature);
    //     contract.methods
    //         .mint(amount, allowAmount, ticket, exipreTime, signature)
    //         .send({ from: this.defaultAccount() })
    //         .then((x) => {
    //         window.console.log(x);
    //     })
    //         .catch((err) => {
    //         window.console.error(err);
    //     });
    // }
    // tokenOfOwnerByIndex
    // async listNFTs(address) {
    //     const contract = this.contractAwakenedZoofrenz();
    //     const balance = await this.balanceOf(this.defaultAccount());
    //     window.console.log("balance:", balance);
    //     const promises = [];
    //     for (let index = 0; index < Number.parseInt(balance); index++) {
    //         contract.methods
    //             .tokenOfOwnerByIndex(address, index)
    //             .call()
    //             .then((x) => {
    //             window.console.log("tokenOfOwnerByIndex:", x);
    //             promises.push(contract.methods.tokenURI(x).call());
    //             // contract.methods.tokenURI(x).call()
    //             //     .then((uri: any) => {
    //             //         window.console.log("tokenURI:", uri);
    //             //         const headers: HeadersInit = new Headers();
    //             //         fetch(uri, {
    //             //             method: "get",
    //             //             mode: "no-cors",
    //             //             headers
    //             //         })
    //             //             .then(response => {
    //             //                 window.console.log("response:", response);
    //             //                 if (response.ok) {
    //             //                     response.json()
    //             //                 }
    //             //             })
    //             //             .catch(err => {
    //             //                 window.console.error("fetch token uri:", err);
    //             //             })
    //             //     })
    //             //     .catch((err: any) => {
    //             //         window.console.error("tokenURI:", err);
    //             //     });
    //         })
    //             .catch((err) => {
    //             window.console.error(err);
    //         });
    //     }
    //     window.console.log("promises:", promises);
    //     return Promise.all(promises);
    // }
    balanceOf(address) {
        return new Promise((resolve, reject) => {
            const contract = this.contractAwakenedZoofrenz();
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
    tokensOfOwner(address) {
        return new Promise((resolve, reject) => {
            const contract = this.contractAwakenedZoofrenz();
            contract.methods
                .tokensOfOwner(address)
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
    // ownerOf(index) {
    //     return new Promise((resolve, reject) => {
    //         const contract = this.contractAwakenedZoofrenz();
    //         contract.methods
    //             .ownerOf(index)
    //             .call()
    //             .then((x) => {
    //             window.console.log("ownerOf:", x);
    //             resolve(x);
    //         })
    //             .catch((err) => {
    //             window.console.error("ownerOf:", err);
    //             reject(err);
    //         });
    //     });
    // }
    // async batchOwnerOf(start, end) {
    //     console.log("batchOwnerOf:", start, end);
    //     const ownerMapByTokenId = new Map();
    //     const promises = [];
    //     for (let index = start; index <= end; index++) {
    //         promises.push(new Promise((resolve, reject) => {
    //             this.ownerOf(index)
    //                 .then((owner) => {
    //                 ownerMapByTokenId.set(index, owner);
    //                 resolve(`${index},${owner}`);
    //             })
    //                 .catch((e) => {
    //                 ownerMapByTokenId.set(index, "error");
    //                 resolve(`${index},error`);
    //             });
    //         }));
    //     }
    //     await Promise.all(promises);
    //     return new Promise((resolve) => {
    //         resolve(ownerMapByTokenId);
    //     });
    // }
    // async listOwners(start, end, batchSize = 1) {
    //     // const end = 6666 * 2;
    //     const ownerMapByTokenId = new Map();
    //     for (let index = start; index <= end; index += batchSize) {
    //         const batchOwnerMapByTokenId = await this.batchOwnerOf(index, index + batchSize);
    //         batchOwnerMapByTokenId.forEach((owner, index) => {
    //             ownerMapByTokenId.set(index, owner);
    //         });
    //     }
    //     return ownerMapByTokenId;
    // }
    // tokenURI(index) {
    //     return new Promise((resolve, reject) => {
    //         const contract = this.contractAwakenedZoofrenz();
    //         contract.methods
    //             .tokenURI(index)
    //             .call()
    //             .then((x) => {
    //             window.console.log("tokenURI:", x);
    //             resolve(x);
    //         })
    //             .catch((err) => {
    //             window.console.error("tokenURI:", err);
    //             reject(err);
    //         });
    //     });
    // }
    // async batchTokenURI(start, end) {
    //     console.log("batchTokenURI:", start, end);
    //     const tokenIdMapTokenURI = new Map();
    //     const promises = [];
    //     for (let index = start; index <= end; index++) {
    //         promises.push(new Promise((resolve, reject) => {
    //             this.tokenURI(index)
    //                 .then((tokenURI) => {
    //                 tokenIdMapTokenURI.set(index, tokenURI);
    //                 resolve(tokenURI);
    //             })
    //                 .catch((e) => {
    //                 window.console.error("catch exception:", e);
    //                 resolve("");
    //             });
    //         }));
    //     }
    //     await Promise.all(promises);
    //     return new Promise((resolve) => {
    //         resolve(tokenIdMapTokenURI);
    //     });
    // }
    // async mapTokenURIById(start, end, batchSize = 1) {
    //     const allTokenURIMapById = new Map();
    //     for (let index = start; index <= end; index += batchSize) {
    //         const tokenURIMapById = await this.batchTokenURI(index, index + batchSize);
    //         tokenURIMapById.forEach((tokenURI, tokenId) => {
    //             allTokenURIMapById.set(tokenId, tokenURI);
    //         });
    //     }
    //     return allTokenURIMapById;
    // }
}
const awakenedZoofrenz = new AwakenedZoofrenz();
export { awakenedZoofrenz as AwakenedZoofrenz };