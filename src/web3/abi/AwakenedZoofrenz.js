export const AwakenedZoofrenz = {
  "_format": "hh-sol-artifact-1",
  "contractName": "AwakenedZoofrenz",
  "sourceName": "contracts/AwakenedZoofrenz/AwakenedZoofrenz.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initVRFAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "zftIds",
          "type": "uint256[]"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "devMigrate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "frenzRarities",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "originalId",
          "type": "uint256"
        }
      ],
      "name": "getAwakenedId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getMigratedId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getOriginalId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getOwnershipData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "startTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "burned",
              "type": "bool"
            }
          ],
          "internalType": "struct ERC721A.TokenOwnership",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getRevealedId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStartTokenId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "requestId",
          "type": "uint256"
        }
      ],
      "name": "getVRFAwakenedId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getVRFRequestId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isAwakenEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isMigrateEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "isTokenExist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxAwakenSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "migrateReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "numberMinted",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "numberOfAwakened",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "operators",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "requestVRF",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "migratedId",
          "type": "uint256"
        }
      ],
      "name": "setMigratedId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "operator",
          "type": "address[]"
        }
      ],
      "name": "setOperators",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "zftId",
          "type": "uint256"
        }
      ],
      "name": "setOriginalId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "rarities",
          "type": "uint256[]"
        }
      ],
      "name": "setRarities",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "newURI",
          "type": "string"
        }
      ],
      "name": "setUnvealedURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "setVRF",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "tokensOfOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalMinted",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unrevealedURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260c8600c553480156200001657600080fd5b506040516200524a3803806200524a83398181016040528101906200003c919062000337565b6040518060400160405280601581526020017f5a6f6f6672656e7a204170656672656e7a20322e3000000000000000000000008152506040518060400160405280600381526020017f5a413200000000000000000000000000000000000000000000000000000000008152508160029080519060200190620000c092919062000270565b508060039080519060200190620000d992919062000270565b50620000ea6200019860201b60201c565b60008190555050506200011262000106620001a260201b60201c565b620001aa60201b60201c565b600160098190555080600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001601060006101000a81548160ff0219169083151502179055506001601060016101000a81548160ff0219169083151502179055505062000421565b6000611a0a905090565b600033905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200027e906200039d565b90600052602060002090601f016020900481019282620002a25760008555620002ee565b82601f10620002bd57805160ff1916838001178555620002ee565b82800160010185558215620002ee579182015b82811115620002ed578251825591602001919060010190620002d0565b5b509050620002fd919062000301565b5090565b5b808211156200031c57600081600090555060010162000302565b5090565b600081519050620003318162000407565b92915050565b60006020828403121562000350576200034f62000402565b5b6000620003608482850162000320565b91505092915050565b600062000376826200037d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006002820490506001821680620003b657607f821691505b60208210811415620003cd57620003cc620003d3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b620004128162000369565b81146200041e57600080fd5b50565b614e1980620004316000396000f3fe608060405234801561001057600080fd5b50600436106102bb5760003560e01c80638de526fb11610182578063dad56fef116100e9578063e985e9c5116100a2578063f2fde38b1161007c578063f2fde38b14610908578063f5a62e1914610924578063f8353e0d14610940578063fa3009c51461095c576102bb565b8063e985e9c51461088c578063ec0e90ae146108bc578063edbc53a4146108d8576102bb565b8063dad56fef146107a4578063dc33e681146107c2578063ddf71cd5146107f2578063de1e83fe1461080e578063e26882d51461082c578063e73d0d5e1461085c576102bb565b8063b88d4fde1161013b578063b88d4fde146106d0578063c2986c37146106ec578063c49cdc2e1461070a578063c87b56dd14610728578063d1acb63114610758578063d4eef57214610774576102bb565b80638de526fb146105fc5780639231ab2a1461062c57806395d89b411461065c578063978190ba1461067a578063a22cb46514610696578063a2309ff8146106b2576102bb565b806342966c68116102265780637035bf18116101df5780637035bf181461053a57806370a0823114610558578063715018a614610588578063820bd58f146105925780638462151c146105ae5780638da5cb5b146105de576102bb565b806342966c68146104665780634dd0f8571461048257806355f804b3146104a0578063567b8469146104bc5780636352211e146104ec5780636c0360eb1461051c576102bb565b806318160ddd1161027857806318160ddd146103a65780631d8334f6146103c457806323b872dd146103f457806324fcd9071461041057806340c10f191461042e57806342842e0e1461044a576102bb565b806301ffc9a7146102c0578063039310e1146102f057806306fdde031461030c578063081812fc1461032a578063095ea7b31461035a57806313e7c9d814610376575b600080fd5b6102da60048036038101906102d591906141b5565b61098c565b6040516102e7919061468d565b60405180910390f35b61030a6004803603810190610305919061425c565b610a6e565b005b610314610b04565b60405161032191906146a8565b60405180910390f35b610344600480360381019061033f91906142a5565b610b96565b6040516103519190614604565b60405180910390f35b610374600480360381019061036f9190614047565b610c12565b005b610390600480360381019061038b9190613ec4565b610d1d565b60405161039d919061468d565b60405180910390f35b6103ae610d3d565b6040516103bb9190614785565b60405180910390f35b6103de60048036038101906103d991906142a5565b610d54565b6040516103eb9190614785565b60405180910390f35b61040e60048036038101906104099190613f31565b610d71565b005b610418610d81565b6040516104259190614785565b60405180910390f35b61044860048036038101906104439190614047565b610d87565b005b610464600480360381019061045f9190613f31565b610e21565b005b610480600480360381019061047b91906142a5565b610e41565b005b61048a610edb565b604051610497919061468d565b60405180910390f35b6104ba60048036038101906104b5919061420f565b610eee565b005b6104d660048036038101906104d191906142a5565b610f80565b6040516104e39190614785565b60405180910390f35b610506600480360381019061050191906142a5565b61107c565b6040516105139190614604565b60405180910390f35b610524611092565b60405161053191906146a8565b60405180910390f35b610542611120565b60405161054f91906146a8565b60405180910390f35b610572600480360381019061056d9190613ec4565b6111ae565b60405161057f9190614785565b60405180910390f35b61059061127e565b005b6105ac60048036038101906105a791906142ff565b611306565b005b6105c860048036038101906105c39190613ec4565b6113ae565b6040516105d5919061466b565b60405180910390f35b6105e66115c1565b6040516105f39190614604565b60405180910390f35b610616600480360381019061061191906142a5565b6115eb565b6040516106239190614785565b60405180910390f35b610646600480360381019061064191906142a5565b611608565b604051610653919061476a565b60405180910390f35b610664611620565b60405161067191906146a8565b60405180910390f35b610694600480360381019061068f91906142ff565b6116b2565b005b6106b060048036038101906106ab9190614007565b611772565b005b6106ba6118ea565b6040516106c79190614785565b60405180910390f35b6106ea60048036038101906106e59190613f84565b6118f9565b005b6106f4611975565b604051610701919061468d565b60405180910390f35b610712611988565b60405161071f9190614785565b60405180910390f35b610742600480360381019061073d91906142a5565b61198e565b60405161074f91906146a8565b60405180910390f35b610772600480360381019061076d91906140d4565b611bcb565b005b61078e600480360381019061078991906142a5565b611cdb565b60405161079b9190614785565b60405180910390f35b6107ac611cf8565b6040516107b99190614785565b60405180910390f35b6107dc60048036038101906107d79190613ec4565b611cfe565b6040516107e99190614785565b60405180910390f35b61080c60048036038101906108079190614087565b611d10565b005b610816611e31565b6040516108239190614785565b60405180910390f35b610846600480360381019061084191906142a5565b611e40565b604051610853919061468d565b60405180910390f35b610876600480360381019061087191906142a5565b611e52565b6040516108839190614785565b60405180910390f35b6108a660048036038101906108a19190613ef1565b612062565b6040516108b3919061468d565b60405180910390f35b6108d660048036038101906108d19190614134565b6120f6565b005b6108f260048036038101906108ed91906142a5565b61222c565b6040516108ff9190614785565b60405180910390f35b610922600480360381019061091d9190613ec4565b612249565b005b61093e60048036038101906109399190613ec4565b612341565b005b61095a600480360381019061095591906142a5565b612401565b005b610976600480360381019061097191906142a5565b612567565b6040516109839190614785565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a5757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a675750610a6682612584565b5b9050919050565b610a766125ee565b73ffffffffffffffffffffffffffffffffffffffff16610a946115c1565b73ffffffffffffffffffffffffffffffffffffffff1614610aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae19061472a565b60405180910390fd5b80600f9080519060200190610b00929190613af8565b5050565b606060028054610b1390614a28565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3f90614a28565b8015610b8c5780601f10610b6157610100808354040283529160200191610b8c565b820191906000526020600020905b815481529060010190602001808311610b6f57829003601f168201915b5050505050905090565b6000610ba1826125f6565b610bd7576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610c1d8261107c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610ca46125ee565b73ffffffffffffffffffffffffffffffffffffffff1614158015610cd65750610cd481610ccf6125ee565b612062565b155b15610d0d576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d18838383612644565b505050565b60116020528060005260406000206000915054906101000a900460ff1681565b6000610d476126f6565b6001546000540303905090565b600060136000838152602001908152602001600020549050919050565b610d7c838383612700565b505050565b600c5481565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0a9061474a565b60405180910390fd5b610e1d8282612bb6565b5050565b610e3c838383604051806020016040528060008152506118f9565b505050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ecd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec49061474a565b60405180910390fd5b610ed8816000612bd4565b50565b601060009054906101000a900460ff1681565b610ef66125ee565b73ffffffffffffffffffffffffffffffffffffffff16610f146115c1565b73ffffffffffffffffffffffffffffffffffffffff1614610f6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f619061472a565b60405180910390fd5b8181600e9190610f7b929190613b7e565b505050565b60008060136000848152602001908152602001600020541415610fb6576014600083815260200190815260200160002054611075565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000858152602001908152602001600020546040518263ffffffff1660e01b81526004016110249190614785565b60206040518083038186803b15801561103c57600080fd5b505afa158015611050573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107491906142d2565b5b9050919050565b600061108782612fc4565b600001519050919050565b600e805461109f90614a28565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb90614a28565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b505050505081565b600f805461112d90614a28565b80601f016020809104026020016040519081016040528092919081815260200182805461115990614a28565b80156111a65780601f1061117b576101008083540402835291602001916111a6565b820191906000526020600020905b81548152906001019060200180831161118957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611216576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b6112866125ee565b73ffffffffffffffffffffffffffffffffffffffff166112a46115c1565b73ffffffffffffffffffffffffffffffffffffffff16146112fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f19061472a565b60405180910390fd5b6113046000613253565b565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611392576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113899061474a565b60405180910390fd5b8060166000848152602001908152602001600020819055505050565b606060006113bb836111ae565b905060008054905060008060008467ffffffffffffffff8111156113e2576113e1614bc1565b5b6040519080825280602002602001820160405280156114105781602001602082028036833780820191505090505b509050600061141d6126f6565b90505b848110156115b3576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff16151515158152505090508060400151156114fd57506115a8565b600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461153d57806000015193505b8873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611598578183868060010197508151811061158b5761158a614b92565b5b6020026020010181815250505b868514156115a657506115b3565b505b806001019050611420565b508095505050505050919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060176000838152602001908152602001600020549050919050565b611610613c04565b61161982612fc4565b9050919050565b60606003805461162f90614a28565b80601f016020809104026020016040519081016040528092919081815260200182805461165b90614a28565b80156116a85780601f1061167d576101008083540402835291602001916116a8565b820191906000526020600020905b81548152906001019060200180831161168b57829003601f168201915b5050505050905090565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661173e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117359061474a565b60405180910390fd5b8060146000848152602001908152602001600020819055508160156000838152602001908152602001600020819055505050565b61177a6125ee565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117df576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600760006117ec6125ee565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166118996125ee565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516118de919061468d565b60405180910390a35050565b60006118f4613319565b905090565b611904848484612700565b6119238373ffffffffffffffffffffffffffffffffffffffff1661332c565b801561193857506119368484848461334f565b155b1561196f576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b601060019054906101000a900460ff1681565b610fa081565b6060611999826125f6565b6119d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119cf906146ca565b60405180910390fd5b600080601360008581526020019081526020016000205414611b5557600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000868152602001908152602001600020546040518263ffffffff1660e01b8152600401611a629190614785565b60206040518083038186803b158015611a7a57600080fd5b505afa158015611a8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab291906142d2565b90506000811415611b5057600f8054611aca90614a28565b80601f0160208091040260200160405190810160405280929190818152602001828054611af690614a28565b8015611b435780601f10611b1857610100808354040283529160200191611b43565b820191906000526020600020905b815481529060010190602001808311611b2657829003601f168201915b5050505050915050611bc6565b611b6c565b601460008481526020019081526020016000205490505b6000611b766134af565b90506000815111611b965760405180602001604052806000815250611bc1565b80611ba083613541565b604051602001611bb19291906145d5565b6040516020818303038152906040525b925050505b919050565b611bd36125ee565b73ffffffffffffffffffffffffffffffffffffffff16611bf16115c1565b73ffffffffffffffffffffffffffffffffffffffff1614611c47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c3e9061472a565b60405180910390fd5b600080611c526126f6565b611c5a613319565b611c6491906148a3565b905060005b85859050811015611cc6578082611c8091906148a3565b9250858582818110611c9557611c94614b92565b5b9050602002013560146000858152602001908152602001600020819055508080611cbe90614a8b565b915050611c69565b50611cd48386869050612bb6565b5050505050565b600060156000838152602001908152602001600020549050919050565b600d5481565b6000611d09826136a2565b9050919050565b611d186125ee565b73ffffffffffffffffffffffffffffffffffffffff16611d366115c1565b73ffffffffffffffffffffffffffffffffffffffff1614611d8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d839061472a565b60405180910390fd5b60005b82829050811015611e2c57600160116000858585818110611db357611db2614b92565b5b9050602002016020810190611dc89190613ec4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080611e2490614a8b565b915050611d8f565b505050565b6000611e3b6126f6565b905090565b6000611e4b826125f6565b9050919050565b60008060146000848152602001908152602001600020549050611a0a811015611f2857600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e73d0d5e826040518263ffffffff1660e01b8152600401611ed09190614785565b60206040518083038186803b158015611ee857600080fd5b505afa158015611efc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2091906142d2565b91505061205d565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120575760126000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000888152602001908152602001600020546040518263ffffffff1660e01b8152600401611ff09190614785565b60206040518083038186803b15801561200857600080fd5b505afa15801561201c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204091906142d2565b81526020019081526020016000205491505061205d565b60009150505b919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6120fe6125ee565b73ffffffffffffffffffffffffffffffffffffffff1661211c6115c1565b73ffffffffffffffffffffffffffffffffffffffff1614612172576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121699061472a565b60405180910390fd5b8181905084849050146121ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121b19061470a565b60405180910390fd5b60005b84849050811015612225578282828181106121db576121da614b92565b5b90506020020135601260008787858181106121f9576121f8614b92565b5b90506020020135815260200190815260200160002081905550808061221d90614a8b565b9150506121bd565b5050505050565b600060146000838152602001908152602001600020549050919050565b6122516125ee565b73ffffffffffffffffffffffffffffffffffffffff1661226f6115c1565b73ffffffffffffffffffffffffffffffffffffffff16146122c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122bc9061472a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232c906146ea565b60405180910390fd5b61233e81613253565b50565b6123496125ee565b73ffffffffffffffffffffffffffffffffffffffff166123676115c1565b73ffffffffffffffffffffffffffffffffffffffff16146123bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123b49061472a565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661248d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124849061474a565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0c862896040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156124f957600080fd5b505af115801561250d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253191906142d2565b90508060136000848152602001908152602001600020819055508160176000838152602001908152602001600020819055505050565b600060166000838152602001908152602001600020549050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b6000816126016126f6565b11158015612610575060005482105b801561263d575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000611a0a905090565b600061270b82612fc4565b90508373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614612776576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166127976125ee565b73ffffffffffffffffffffffffffffffffffffffff1614806127c657506127c5856127c06125ee565b612062565b5b8061280b57506127d46125ee565b73ffffffffffffffffffffffffffffffffffffffff166127f384610b96565b73ffffffffffffffffffffffffffffffffffffffff16145b905080612844576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156128ab576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6128b8858585600161370c565b6128c460008487612644565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008581526020019081526020016000209050848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060006001850190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612b44576000548214612b4357878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b505050828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612baf8585856001613712565b5050505050565b612bd0828260405180602001604052806000815250613718565b5050565b6000612bdf83612fc4565b90506000816000015190508215612cc05760008173ffffffffffffffffffffffffffffffffffffffff16612c116125ee565b73ffffffffffffffffffffffffffffffffffffffff161480612c405750612c3f82612c3a6125ee565b612062565b5b80612c855750612c4e6125ee565b73ffffffffffffffffffffffffffffffffffffffff16612c6d86610b96565b73ffffffffffffffffffffffffffffffffffffffff16145b905080612cbe576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b612cce81600086600161370c565b612cda60008583612644565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060018160000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060018160000160108282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008781526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600181600001601c6101000a81548160ff02191690831515021790555060006001870190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612f3e576000548214612f3d57848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b5050505083600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612fac816000866001613712565b60016000815480929190600101919050555050505050565b612fcc613c04565b600082905080612fda6126f6565b11158015612fe9575060005481105b1561321c576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050806040015161321a57600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146130fe57809250505061324e565b5b60011561321957818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461321457809250505061324e565b6130ff565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006133236126f6565b60005403905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026133756125ee565b8786866040518563ffffffff1660e01b8152600401613397949392919061461f565b602060405180830381600087803b1580156133b157600080fd5b505af19250505080156133e257506040513d601f19601f820116820180604052508101906133df91906141e2565b60015b61345c573d8060008114613412576040519150601f19603f3d011682016040523d82523d6000602084013e613417565b606091505b50600081511415613454576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6060600e80546134be90614a28565b80601f01602080910402602001604051908101604052809291908181526020018280546134ea90614a28565b80156135375780601f1061350c57610100808354040283529160200191613537565b820191906000526020600020905b81548152906001019060200180831161351a57829003601f168201915b5050505050905090565b60606000821415613589576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061369d565b600082905060005b600082146135bb5780806135a490614a8b565b915050600a826135b491906148f9565b9150613591565b60008167ffffffffffffffff8111156135d7576135d6614bc1565b5b6040519080825280601f01601f1916602001820160405280156136095781602001600182028036833780820191505090505b5090505b6000851461369657600182613622919061492a565b9150600a856136319190614ad4565b603061363d91906148a3565b60f81b81838151811061365357613652614b92565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561368f91906148f9565b945061360d565b8093505050505b919050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b50505050565b50505050565b613725838383600161372a565b505050565b600080549050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415613797576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008414156137d2576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6137df600086838761370c565b83600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160088282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550846004600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426004600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000819050600085820190508380156139a957506139a88773ffffffffffffffffffffffffffffffffffffffff1661332c565b5b15613a6f575b818773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613a1e600088848060010195508861334f565b613a54576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808214156139af578260005414613a6a57600080fd5b613adb565b5b818060010192508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a480821415613a70575b816000819055505050613af16000868387613712565b5050505050565b828054613b0490614a28565b90600052602060002090601f016020900481019282613b265760008555613b6d565b82601f10613b3f57805160ff1916838001178555613b6d565b82800160010185558215613b6d579182015b82811115613b6c578251825591602001919060010190613b51565b5b509050613b7a9190613c47565b5090565b828054613b8a90614a28565b90600052602060002090601f016020900481019282613bac5760008555613bf3565b82601f10613bc557803560ff1916838001178555613bf3565b82800160010185558215613bf3579182015b82811115613bf2578235825591602001919060010190613bd7565b5b509050613c009190613c47565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b5b80821115613c60576000816000905550600101613c48565b5090565b6000613c77613c72846147c5565b6147a0565b905082815260208101848484011115613c9357613c92614bff565b5b613c9e8482856149e6565b509392505050565b6000613cb9613cb4846147f6565b6147a0565b905082815260208101848484011115613cd557613cd4614bff565b5b613ce08482856149e6565b509392505050565b600081359050613cf781614d87565b92915050565b60008083601f840112613d1357613d12614bf5565b5b8235905067ffffffffffffffff811115613d3057613d2f614bf0565b5b602083019150836020820283011115613d4c57613d4b614bfa565b5b9250929050565b60008083601f840112613d6957613d68614bf5565b5b8235905067ffffffffffffffff811115613d8657613d85614bf0565b5b602083019150836020820283011115613da257613da1614bfa565b5b9250929050565b600081359050613db881614d9e565b92915050565b600081359050613dcd81614db5565b92915050565b600081519050613de281614db5565b92915050565b600082601f830112613dfd57613dfc614bf5565b5b8135613e0d848260208601613c64565b91505092915050565b60008083601f840112613e2c57613e2b614bf5565b5b8235905067ffffffffffffffff811115613e4957613e48614bf0565b5b602083019150836001820283011115613e6557613e64614bfa565b5b9250929050565b600082601f830112613e8157613e80614bf5565b5b8135613e91848260208601613ca6565b91505092915050565b600081359050613ea981614dcc565b92915050565b600081519050613ebe81614dcc565b92915050565b600060208284031215613eda57613ed9614c09565b5b6000613ee884828501613ce8565b91505092915050565b60008060408385031215613f0857613f07614c09565b5b6000613f1685828601613ce8565b9250506020613f2785828601613ce8565b9150509250929050565b600080600060608486031215613f4a57613f49614c09565b5b6000613f5886828701613ce8565b9350506020613f6986828701613ce8565b9250506040613f7a86828701613e9a565b9150509250925092565b60008060008060808587031215613f9e57613f9d614c09565b5b6000613fac87828801613ce8565b9450506020613fbd87828801613ce8565b9350506040613fce87828801613e9a565b925050606085013567ffffffffffffffff811115613fef57613fee614c04565b5b613ffb87828801613de8565b91505092959194509250565b6000806040838503121561401e5761401d614c09565b5b600061402c85828601613ce8565b925050602061403d85828601613da9565b9150509250929050565b6000806040838503121561405e5761405d614c09565b5b600061406c85828601613ce8565b925050602061407d85828601613e9a565b9150509250929050565b6000806020838503121561409e5761409d614c09565b5b600083013567ffffffffffffffff8111156140bc576140bb614c04565b5b6140c885828601613cfd565b92509250509250929050565b6000806000604084860312156140ed576140ec614c09565b5b600084013567ffffffffffffffff81111561410b5761410a614c04565b5b61411786828701613d53565b9350935050602061412a86828701613ce8565b9150509250925092565b6000806000806040858703121561414e5761414d614c09565b5b600085013567ffffffffffffffff81111561416c5761416b614c04565b5b61417887828801613d53565b9450945050602085013567ffffffffffffffff81111561419b5761419a614c04565b5b6141a787828801613d53565b925092505092959194509250565b6000602082840312156141cb576141ca614c09565b5b60006141d984828501613dbe565b91505092915050565b6000602082840312156141f8576141f7614c09565b5b600061420684828501613dd3565b91505092915050565b6000806020838503121561422657614225614c09565b5b600083013567ffffffffffffffff81111561424457614243614c04565b5b61425085828601613e16565b92509250509250929050565b60006020828403121561427257614271614c09565b5b600082013567ffffffffffffffff8111156142905761428f614c04565b5b61429c84828501613e6c565b91505092915050565b6000602082840312156142bb576142ba614c09565b5b60006142c984828501613e9a565b91505092915050565b6000602082840312156142e8576142e7614c09565b5b60006142f684828501613eaf565b91505092915050565b6000806040838503121561431657614315614c09565b5b600061432485828601613e9a565b925050602061433585828601613e9a565b9150509250929050565b600061434b83836145a8565b60208301905092915050565b6143608161495e565b82525050565b61436f8161495e565b82525050565b600061438082614837565b61438a8185614865565b935061439583614827565b8060005b838110156143c65781516143ad888261433f565b97506143b883614858565b925050600181019050614399565b5085935050505092915050565b6143dc81614970565b82525050565b6143eb81614970565b82525050565b60006143fc82614842565b6144068185614876565b93506144168185602086016149f5565b61441f81614c0e565b840191505092915050565b60006144358261484d565b61443f8185614887565b935061444f8185602086016149f5565b61445881614c0e565b840191505092915050565b600061446e8261484d565b6144788185614898565b93506144888185602086016149f5565b80840191505092915050565b60006144a1602183614887565b91506144ac82614c1f565b604082019050919050565b60006144c4602683614887565b91506144cf82614c6e565b604082019050919050565b60006144e7602783614887565b91506144f282614cbd565b604082019050919050565b600061450a600583614898565b915061451582614d0c565b600582019050919050565b600061452d602083614887565b915061453882614d35565b602082019050919050565b6000614550600c83614887565b915061455b82614d5e565b602082019050919050565b60608201600082015161457c6000850182614357565b50602082015161458f60208501826145c6565b5060408201516145a260408501826143d3565b50505050565b6145b1816149c8565b82525050565b6145c0816149c8565b82525050565b6145cf816149d2565b82525050565b60006145e18285614463565b91506145ed8284614463565b91506145f8826144fd565b91508190509392505050565b60006020820190506146196000830184614366565b92915050565b60006080820190506146346000830187614366565b6146416020830186614366565b61464e60408301856145b7565b818103606083015261466081846143f1565b905095945050505050565b600060208201905081810360008301526146858184614375565b905092915050565b60006020820190506146a260008301846143e2565b92915050565b600060208201905081810360008301526146c2818461442a565b905092915050565b600060208201905081810360008301526146e381614494565b9050919050565b60006020820190508181036000830152614703816144b7565b9050919050565b60006020820190508181036000830152614723816144da565b9050919050565b6000602082019050818103600083015261474381614520565b9050919050565b6000602082019050818103600083015261476381614543565b9050919050565b600060608201905061477f6000830184614566565b92915050565b600060208201905061479a60008301846145b7565b92915050565b60006147aa6147bb565b90506147b68282614a5a565b919050565b6000604051905090565b600067ffffffffffffffff8211156147e0576147df614bc1565b5b6147e982614c0e565b9050602081019050919050565b600067ffffffffffffffff82111561481157614810614bc1565b5b61481a82614c0e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006148ae826149c8565b91506148b9836149c8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156148ee576148ed614b05565b5b828201905092915050565b6000614904826149c8565b915061490f836149c8565b92508261491f5761491e614b34565b5b828204905092915050565b6000614935826149c8565b9150614940836149c8565b92508282101561495357614952614b05565b5b828203905092915050565b6000614969826149a8565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015614a135780820151818401526020810190506149f8565b83811115614a22576000848401525b50505050565b60006002820490506001821680614a4057607f821691505b60208210811415614a5457614a53614b63565b5b50919050565b614a6382614c0e565b810181811067ffffffffffffffff82111715614a8257614a81614bc1565b5b80604052505050565b6000614a96826149c8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415614ac957614ac8614b05565b5b600182019050919050565b6000614adf826149c8565b9150614aea836149c8565b925082614afa57614af9614b34565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732314d657461646174613a204e6f6e6578697374656e7420746f6b6560008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f746f6b656e49647320646f6573206e6f74206d6174636820726172697469657360008201527f206c656e67746800000000000000000000000000000000000000000000000000602082015250565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f6e6f74206f70657261746f720000000000000000000000000000000000000000600082015250565b614d908161495e565b8114614d9b57600080fd5b50565b614da781614970565b8114614db257600080fd5b50565b614dbe8161497c565b8114614dc957600080fd5b50565b614dd5816149c8565b8114614de057600080fd5b5056fea264697066735822122073ba417f9dadd775228366a14143133e43f1f055b26c42d8e29677c80187868664736f6c63430008070033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106102bb5760003560e01c80638de526fb11610182578063dad56fef116100e9578063e985e9c5116100a2578063f2fde38b1161007c578063f2fde38b14610908578063f5a62e1914610924578063f8353e0d14610940578063fa3009c51461095c576102bb565b8063e985e9c51461088c578063ec0e90ae146108bc578063edbc53a4146108d8576102bb565b8063dad56fef146107a4578063dc33e681146107c2578063ddf71cd5146107f2578063de1e83fe1461080e578063e26882d51461082c578063e73d0d5e1461085c576102bb565b8063b88d4fde1161013b578063b88d4fde146106d0578063c2986c37146106ec578063c49cdc2e1461070a578063c87b56dd14610728578063d1acb63114610758578063d4eef57214610774576102bb565b80638de526fb146105fc5780639231ab2a1461062c57806395d89b411461065c578063978190ba1461067a578063a22cb46514610696578063a2309ff8146106b2576102bb565b806342966c68116102265780637035bf18116101df5780637035bf181461053a57806370a0823114610558578063715018a614610588578063820bd58f146105925780638462151c146105ae5780638da5cb5b146105de576102bb565b806342966c68146104665780634dd0f8571461048257806355f804b3146104a0578063567b8469146104bc5780636352211e146104ec5780636c0360eb1461051c576102bb565b806318160ddd1161027857806318160ddd146103a65780631d8334f6146103c457806323b872dd146103f457806324fcd9071461041057806340c10f191461042e57806342842e0e1461044a576102bb565b806301ffc9a7146102c0578063039310e1146102f057806306fdde031461030c578063081812fc1461032a578063095ea7b31461035a57806313e7c9d814610376575b600080fd5b6102da60048036038101906102d591906141b5565b61098c565b6040516102e7919061468d565b60405180910390f35b61030a6004803603810190610305919061425c565b610a6e565b005b610314610b04565b60405161032191906146a8565b60405180910390f35b610344600480360381019061033f91906142a5565b610b96565b6040516103519190614604565b60405180910390f35b610374600480360381019061036f9190614047565b610c12565b005b610390600480360381019061038b9190613ec4565b610d1d565b60405161039d919061468d565b60405180910390f35b6103ae610d3d565b6040516103bb9190614785565b60405180910390f35b6103de60048036038101906103d991906142a5565b610d54565b6040516103eb9190614785565b60405180910390f35b61040e60048036038101906104099190613f31565b610d71565b005b610418610d81565b6040516104259190614785565b60405180910390f35b61044860048036038101906104439190614047565b610d87565b005b610464600480360381019061045f9190613f31565b610e21565b005b610480600480360381019061047b91906142a5565b610e41565b005b61048a610edb565b604051610497919061468d565b60405180910390f35b6104ba60048036038101906104b5919061420f565b610eee565b005b6104d660048036038101906104d191906142a5565b610f80565b6040516104e39190614785565b60405180910390f35b610506600480360381019061050191906142a5565b61107c565b6040516105139190614604565b60405180910390f35b610524611092565b60405161053191906146a8565b60405180910390f35b610542611120565b60405161054f91906146a8565b60405180910390f35b610572600480360381019061056d9190613ec4565b6111ae565b60405161057f9190614785565b60405180910390f35b61059061127e565b005b6105ac60048036038101906105a791906142ff565b611306565b005b6105c860048036038101906105c39190613ec4565b6113ae565b6040516105d5919061466b565b60405180910390f35b6105e66115c1565b6040516105f39190614604565b60405180910390f35b610616600480360381019061061191906142a5565b6115eb565b6040516106239190614785565b60405180910390f35b610646600480360381019061064191906142a5565b611608565b604051610653919061476a565b60405180910390f35b610664611620565b60405161067191906146a8565b60405180910390f35b610694600480360381019061068f91906142ff565b6116b2565b005b6106b060048036038101906106ab9190614007565b611772565b005b6106ba6118ea565b6040516106c79190614785565b60405180910390f35b6106ea60048036038101906106e59190613f84565b6118f9565b005b6106f4611975565b604051610701919061468d565b60405180910390f35b610712611988565b60405161071f9190614785565b60405180910390f35b610742600480360381019061073d91906142a5565b61198e565b60405161074f91906146a8565b60405180910390f35b610772600480360381019061076d91906140d4565b611bcb565b005b61078e600480360381019061078991906142a5565b611cdb565b60405161079b9190614785565b60405180910390f35b6107ac611cf8565b6040516107b99190614785565b60405180910390f35b6107dc60048036038101906107d79190613ec4565b611cfe565b6040516107e99190614785565b60405180910390f35b61080c60048036038101906108079190614087565b611d10565b005b610816611e31565b6040516108239190614785565b60405180910390f35b610846600480360381019061084191906142a5565b611e40565b604051610853919061468d565b60405180910390f35b610876600480360381019061087191906142a5565b611e52565b6040516108839190614785565b60405180910390f35b6108a660048036038101906108a19190613ef1565b612062565b6040516108b3919061468d565b60405180910390f35b6108d660048036038101906108d19190614134565b6120f6565b005b6108f260048036038101906108ed91906142a5565b61222c565b6040516108ff9190614785565b60405180910390f35b610922600480360381019061091d9190613ec4565b612249565b005b61093e60048036038101906109399190613ec4565b612341565b005b61095a600480360381019061095591906142a5565b612401565b005b610976600480360381019061097191906142a5565b612567565b6040516109839190614785565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a5757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610a675750610a6682612584565b5b9050919050565b610a766125ee565b73ffffffffffffffffffffffffffffffffffffffff16610a946115c1565b73ffffffffffffffffffffffffffffffffffffffff1614610aea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae19061472a565b60405180910390fd5b80600f9080519060200190610b00929190613af8565b5050565b606060028054610b1390614a28565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3f90614a28565b8015610b8c5780601f10610b6157610100808354040283529160200191610b8c565b820191906000526020600020905b815481529060010190602001808311610b6f57829003601f168201915b5050505050905090565b6000610ba1826125f6565b610bd7576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610c1d8261107c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c85576040517f943f7b8c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610ca46125ee565b73ffffffffffffffffffffffffffffffffffffffff1614158015610cd65750610cd481610ccf6125ee565b612062565b155b15610d0d576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d18838383612644565b505050565b60116020528060005260406000206000915054906101000a900460ff1681565b6000610d476126f6565b6001546000540303905090565b600060136000838152602001908152602001600020549050919050565b610d7c838383612700565b505050565b600c5481565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0a9061474a565b60405180910390fd5b610e1d8282612bb6565b5050565b610e3c838383604051806020016040528060008152506118f9565b505050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ecd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec49061474a565b60405180910390fd5b610ed8816000612bd4565b50565b601060009054906101000a900460ff1681565b610ef66125ee565b73ffffffffffffffffffffffffffffffffffffffff16610f146115c1565b73ffffffffffffffffffffffffffffffffffffffff1614610f6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f619061472a565b60405180910390fd5b8181600e9190610f7b929190613b7e565b505050565b60008060136000848152602001908152602001600020541415610fb6576014600083815260200190815260200160002054611075565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000858152602001908152602001600020546040518263ffffffff1660e01b81526004016110249190614785565b60206040518083038186803b15801561103c57600080fd5b505afa158015611050573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107491906142d2565b5b9050919050565b600061108782612fc4565b600001519050919050565b600e805461109f90614a28565b80601f01602080910402602001604051908101604052809291908181526020018280546110cb90614a28565b80156111185780601f106110ed57610100808354040283529160200191611118565b820191906000526020600020905b8154815290600101906020018083116110fb57829003601f168201915b505050505081565b600f805461112d90614a28565b80601f016020809104026020016040519081016040528092919081815260200182805461115990614a28565b80156111a65780601f1061117b576101008083540402835291602001916111a6565b820191906000526020600020905b81548152906001019060200180831161118957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611216576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b6112866125ee565b73ffffffffffffffffffffffffffffffffffffffff166112a46115c1565b73ffffffffffffffffffffffffffffffffffffffff16146112fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112f19061472a565b60405180910390fd5b6113046000613253565b565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611392576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113899061474a565b60405180910390fd5b8060166000848152602001908152602001600020819055505050565b606060006113bb836111ae565b905060008054905060008060008467ffffffffffffffff8111156113e2576113e1614bc1565b5b6040519080825280602002602001820160405280156114105781602001602082028036833780820191505090505b509050600061141d6126f6565b90505b848110156115b3576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff16151515158152505090508060400151156114fd57506115a8565b600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461153d57806000015193505b8873ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415611598578183868060010197508151811061158b5761158a614b92565b5b6020026020010181815250505b868514156115a657506115b3565b505b806001019050611420565b508095505050505050919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060176000838152602001908152602001600020549050919050565b611610613c04565b61161982612fc4565b9050919050565b60606003805461162f90614a28565b80601f016020809104026020016040519081016040528092919081815260200182805461165b90614a28565b80156116a85780601f1061167d576101008083540402835291602001916116a8565b820191906000526020600020905b81548152906001019060200180831161168b57829003601f168201915b5050505050905090565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661173e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117359061474a565b60405180910390fd5b8060146000848152602001908152602001600020819055508160156000838152602001908152602001600020819055505050565b61177a6125ee565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117df576040517fb06307db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600760006117ec6125ee565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166118996125ee565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516118de919061468d565b60405180910390a35050565b60006118f4613319565b905090565b611904848484612700565b6119238373ffffffffffffffffffffffffffffffffffffffff1661332c565b801561193857506119368484848461334f565b155b1561196f576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b601060019054906101000a900460ff1681565b610fa081565b6060611999826125f6565b6119d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119cf906146ca565b60405180910390fd5b600080601360008581526020019081526020016000205414611b5557600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000868152602001908152602001600020546040518263ffffffff1660e01b8152600401611a629190614785565b60206040518083038186803b158015611a7a57600080fd5b505afa158015611a8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab291906142d2565b90506000811415611b5057600f8054611aca90614a28565b80601f0160208091040260200160405190810160405280929190818152602001828054611af690614a28565b8015611b435780601f10611b1857610100808354040283529160200191611b43565b820191906000526020600020905b815481529060010190602001808311611b2657829003601f168201915b5050505050915050611bc6565b611b6c565b601460008481526020019081526020016000205490505b6000611b766134af565b90506000815111611b965760405180602001604052806000815250611bc1565b80611ba083613541565b604051602001611bb19291906145d5565b6040516020818303038152906040525b925050505b919050565b611bd36125ee565b73ffffffffffffffffffffffffffffffffffffffff16611bf16115c1565b73ffffffffffffffffffffffffffffffffffffffff1614611c47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c3e9061472a565b60405180910390fd5b600080611c526126f6565b611c5a613319565b611c6491906148a3565b905060005b85859050811015611cc6578082611c8091906148a3565b9250858582818110611c9557611c94614b92565b5b9050602002013560146000858152602001908152602001600020819055508080611cbe90614a8b565b915050611c69565b50611cd48386869050612bb6565b5050505050565b600060156000838152602001908152602001600020549050919050565b600d5481565b6000611d09826136a2565b9050919050565b611d186125ee565b73ffffffffffffffffffffffffffffffffffffffff16611d366115c1565b73ffffffffffffffffffffffffffffffffffffffff1614611d8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d839061472a565b60405180910390fd5b60005b82829050811015611e2c57600160116000858585818110611db357611db2614b92565b5b9050602002016020810190611dc89190613ec4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080611e2490614a8b565b915050611d8f565b505050565b6000611e3b6126f6565b905090565b6000611e4b826125f6565b9050919050565b60008060146000848152602001908152602001600020549050611a0a811015611f2857600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e73d0d5e826040518263ffffffff1660e01b8152600401611ed09190614785565b60206040518083038186803b158015611ee857600080fd5b505afa158015611efc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f2091906142d2565b91505061205d565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146120575760126000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663995e433960136000888152602001908152602001600020546040518263ffffffff1660e01b8152600401611ff09190614785565b60206040518083038186803b15801561200857600080fd5b505afa15801561201c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061204091906142d2565b81526020019081526020016000205491505061205d565b60009150505b919050565b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6120fe6125ee565b73ffffffffffffffffffffffffffffffffffffffff1661211c6115c1565b73ffffffffffffffffffffffffffffffffffffffff1614612172576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121699061472a565b60405180910390fd5b8181905084849050146121ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121b19061470a565b60405180910390fd5b60005b84849050811015612225578282828181106121db576121da614b92565b5b90506020020135601260008787858181106121f9576121f8614b92565b5b90506020020135815260200190815260200160002081905550808061221d90614a8b565b9150506121bd565b5050505050565b600060146000838152602001908152602001600020549050919050565b6122516125ee565b73ffffffffffffffffffffffffffffffffffffffff1661226f6115c1565b73ffffffffffffffffffffffffffffffffffffffff16146122c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122bc9061472a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612335576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161232c906146ea565b60405180910390fd5b61233e81613253565b50565b6123496125ee565b73ffffffffffffffffffffffffffffffffffffffff166123676115c1565b73ffffffffffffffffffffffffffffffffffffffff16146123bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123b49061472a565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b601160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661248d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124849061474a565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0c862896040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156124f957600080fd5b505af115801561250d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061253191906142d2565b90508060136000848152602001908152602001600020819055508160176000838152602001908152602001600020819055505050565b600060166000838152602001908152602001600020549050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b6000816126016126f6565b11158015612610575060005482105b801561263d575060046000838152602001908152602001600020600001601c9054906101000a900460ff16155b9050919050565b826006600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000611a0a905090565b600061270b82612fc4565b90508373ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff1614612776576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166127976125ee565b73ffffffffffffffffffffffffffffffffffffffff1614806127c657506127c5856127c06125ee565b612062565b5b8061280b57506127d46125ee565b73ffffffffffffffffffffffffffffffffffffffff166127f384610b96565b73ffffffffffffffffffffffffffffffffffffffff16145b905080612844576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156128ab576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6128b8858585600161370c565b6128c460008487612644565b6001600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008581526020019081526020016000209050848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060006001850190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612b44576000548214612b4357878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b505050828473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612baf8585856001613712565b5050505050565b612bd0828260405180602001604052806000815250613718565b5050565b6000612bdf83612fc4565b90506000816000015190508215612cc05760008173ffffffffffffffffffffffffffffffffffffffff16612c116125ee565b73ffffffffffffffffffffffffffffffffffffffff161480612c405750612c3f82612c3a6125ee565b612062565b5b80612c855750612c4e6125ee565b73ffffffffffffffffffffffffffffffffffffffff16612c6d86610b96565b73ffffffffffffffffffffffffffffffffffffffff16145b905080612cbe576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b612cce81600086600161370c565b612cda60008583612644565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060018160000160008282829054906101000a900467ffffffffffffffff160392506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060018160000160108282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000600460008781526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550428160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600181600001601c6101000a81548160ff02191690831515021790555060006001870190506000600460008381526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612f3e576000548214612f3d57848160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085602001518160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5b5050505083600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612fac816000866001613712565b60016000815480929190600101919050555050505050565b612fcc613c04565b600082905080612fda6126f6565b11158015612fe9575060005481105b1561321c576000600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050806040015161321a57600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff16146130fe57809250505061324e565b5b60011561321957818060019003925050600460008381526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815260200160008201601c9054906101000a900460ff1615151515815250509050600073ffffffffffffffffffffffffffffffffffffffff16816000015173ffffffffffffffffffffffffffffffffffffffff161461321457809250505061324e565b6130ff565b5b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006133236126f6565b60005403905090565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60008373ffffffffffffffffffffffffffffffffffffffff1663150b7a026133756125ee565b8786866040518563ffffffff1660e01b8152600401613397949392919061461f565b602060405180830381600087803b1580156133b157600080fd5b505af19250505080156133e257506040513d601f19601f820116820180604052508101906133df91906141e2565b60015b61345c573d8060008114613412576040519150601f19603f3d011682016040523d82523d6000602084013e613417565b606091505b50600081511415613454576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050949350505050565b6060600e80546134be90614a28565b80601f01602080910402602001604051908101604052809291908181526020018280546134ea90614a28565b80156135375780601f1061350c57610100808354040283529160200191613537565b820191906000526020600020905b81548152906001019060200180831161351a57829003601f168201915b5050505050905090565b60606000821415613589576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061369d565b600082905060005b600082146135bb5780806135a490614a8b565b915050600a826135b491906148f9565b9150613591565b60008167ffffffffffffffff8111156135d7576135d6614bc1565b5b6040519080825280601f01601f1916602001820160405280156136095781602001600182028036833780820191505090505b5090505b6000851461369657600182613622919061492a565b9150600a856136319190614ad4565b603061363d91906148a3565b60f81b81838151811061365357613652614b92565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561368f91906148f9565b945061360d565b8093505050505b919050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160089054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b50505050565b50505050565b613725838383600161372a565b505050565b600080549050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415613797576040517f2e07630000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008414156137d2576040517fb562e8dd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6137df600086838761370c565b83600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160088282829054906101000a900467ffffffffffffffff160192506101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550846004600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426004600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506000819050600085820190508380156139a957506139a88773ffffffffffffffffffffffffffffffffffffffff1661332c565b5b15613a6f575b818773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613a1e600088848060010195508861334f565b613a54576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808214156139af578260005414613a6a57600080fd5b613adb565b5b818060010192508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a480821415613a70575b816000819055505050613af16000868387613712565b5050505050565b828054613b0490614a28565b90600052602060002090601f016020900481019282613b265760008555613b6d565b82601f10613b3f57805160ff1916838001178555613b6d565b82800160010185558215613b6d579182015b82811115613b6c578251825591602001919060010190613b51565b5b509050613b7a9190613c47565b5090565b828054613b8a90614a28565b90600052602060002090601f016020900481019282613bac5760008555613bf3565b82601f10613bc557803560ff1916838001178555613bf3565b82800160010185558215613bf3579182015b82811115613bf2578235825591602001919060010190613bd7565b5b509050613c009190613c47565b5090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600067ffffffffffffffff1681526020016000151581525090565b5b80821115613c60576000816000905550600101613c48565b5090565b6000613c77613c72846147c5565b6147a0565b905082815260208101848484011115613c9357613c92614bff565b5b613c9e8482856149e6565b509392505050565b6000613cb9613cb4846147f6565b6147a0565b905082815260208101848484011115613cd557613cd4614bff565b5b613ce08482856149e6565b509392505050565b600081359050613cf781614d87565b92915050565b60008083601f840112613d1357613d12614bf5565b5b8235905067ffffffffffffffff811115613d3057613d2f614bf0565b5b602083019150836020820283011115613d4c57613d4b614bfa565b5b9250929050565b60008083601f840112613d6957613d68614bf5565b5b8235905067ffffffffffffffff811115613d8657613d85614bf0565b5b602083019150836020820283011115613da257613da1614bfa565b5b9250929050565b600081359050613db881614d9e565b92915050565b600081359050613dcd81614db5565b92915050565b600081519050613de281614db5565b92915050565b600082601f830112613dfd57613dfc614bf5565b5b8135613e0d848260208601613c64565b91505092915050565b60008083601f840112613e2c57613e2b614bf5565b5b8235905067ffffffffffffffff811115613e4957613e48614bf0565b5b602083019150836001820283011115613e6557613e64614bfa565b5b9250929050565b600082601f830112613e8157613e80614bf5565b5b8135613e91848260208601613ca6565b91505092915050565b600081359050613ea981614dcc565b92915050565b600081519050613ebe81614dcc565b92915050565b600060208284031215613eda57613ed9614c09565b5b6000613ee884828501613ce8565b91505092915050565b60008060408385031215613f0857613f07614c09565b5b6000613f1685828601613ce8565b9250506020613f2785828601613ce8565b9150509250929050565b600080600060608486031215613f4a57613f49614c09565b5b6000613f5886828701613ce8565b9350506020613f6986828701613ce8565b9250506040613f7a86828701613e9a565b9150509250925092565b60008060008060808587031215613f9e57613f9d614c09565b5b6000613fac87828801613ce8565b9450506020613fbd87828801613ce8565b9350506040613fce87828801613e9a565b925050606085013567ffffffffffffffff811115613fef57613fee614c04565b5b613ffb87828801613de8565b91505092959194509250565b6000806040838503121561401e5761401d614c09565b5b600061402c85828601613ce8565b925050602061403d85828601613da9565b9150509250929050565b6000806040838503121561405e5761405d614c09565b5b600061406c85828601613ce8565b925050602061407d85828601613e9a565b9150509250929050565b6000806020838503121561409e5761409d614c09565b5b600083013567ffffffffffffffff8111156140bc576140bb614c04565b5b6140c885828601613cfd565b92509250509250929050565b6000806000604084860312156140ed576140ec614c09565b5b600084013567ffffffffffffffff81111561410b5761410a614c04565b5b61411786828701613d53565b9350935050602061412a86828701613ce8565b9150509250925092565b6000806000806040858703121561414e5761414d614c09565b5b600085013567ffffffffffffffff81111561416c5761416b614c04565b5b61417887828801613d53565b9450945050602085013567ffffffffffffffff81111561419b5761419a614c04565b5b6141a787828801613d53565b925092505092959194509250565b6000602082840312156141cb576141ca614c09565b5b60006141d984828501613dbe565b91505092915050565b6000602082840312156141f8576141f7614c09565b5b600061420684828501613dd3565b91505092915050565b6000806020838503121561422657614225614c09565b5b600083013567ffffffffffffffff81111561424457614243614c04565b5b61425085828601613e16565b92509250509250929050565b60006020828403121561427257614271614c09565b5b600082013567ffffffffffffffff8111156142905761428f614c04565b5b61429c84828501613e6c565b91505092915050565b6000602082840312156142bb576142ba614c09565b5b60006142c984828501613e9a565b91505092915050565b6000602082840312156142e8576142e7614c09565b5b60006142f684828501613eaf565b91505092915050565b6000806040838503121561431657614315614c09565b5b600061432485828601613e9a565b925050602061433585828601613e9a565b9150509250929050565b600061434b83836145a8565b60208301905092915050565b6143608161495e565b82525050565b61436f8161495e565b82525050565b600061438082614837565b61438a8185614865565b935061439583614827565b8060005b838110156143c65781516143ad888261433f565b97506143b883614858565b925050600181019050614399565b5085935050505092915050565b6143dc81614970565b82525050565b6143eb81614970565b82525050565b60006143fc82614842565b6144068185614876565b93506144168185602086016149f5565b61441f81614c0e565b840191505092915050565b60006144358261484d565b61443f8185614887565b935061444f8185602086016149f5565b61445881614c0e565b840191505092915050565b600061446e8261484d565b6144788185614898565b93506144888185602086016149f5565b80840191505092915050565b60006144a1602183614887565b91506144ac82614c1f565b604082019050919050565b60006144c4602683614887565b91506144cf82614c6e565b604082019050919050565b60006144e7602783614887565b91506144f282614cbd565b604082019050919050565b600061450a600583614898565b915061451582614d0c565b600582019050919050565b600061452d602083614887565b915061453882614d35565b602082019050919050565b6000614550600c83614887565b915061455b82614d5e565b602082019050919050565b60608201600082015161457c6000850182614357565b50602082015161458f60208501826145c6565b5060408201516145a260408501826143d3565b50505050565b6145b1816149c8565b82525050565b6145c0816149c8565b82525050565b6145cf816149d2565b82525050565b60006145e18285614463565b91506145ed8284614463565b91506145f8826144fd565b91508190509392505050565b60006020820190506146196000830184614366565b92915050565b60006080820190506146346000830187614366565b6146416020830186614366565b61464e60408301856145b7565b818103606083015261466081846143f1565b905095945050505050565b600060208201905081810360008301526146858184614375565b905092915050565b60006020820190506146a260008301846143e2565b92915050565b600060208201905081810360008301526146c2818461442a565b905092915050565b600060208201905081810360008301526146e381614494565b9050919050565b60006020820190508181036000830152614703816144b7565b9050919050565b60006020820190508181036000830152614723816144da565b9050919050565b6000602082019050818103600083015261474381614520565b9050919050565b6000602082019050818103600083015261476381614543565b9050919050565b600060608201905061477f6000830184614566565b92915050565b600060208201905061479a60008301846145b7565b92915050565b60006147aa6147bb565b90506147b68282614a5a565b919050565b6000604051905090565b600067ffffffffffffffff8211156147e0576147df614bc1565b5b6147e982614c0e565b9050602081019050919050565b600067ffffffffffffffff82111561481157614810614bc1565b5b61481a82614c0e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006148ae826149c8565b91506148b9836149c8565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156148ee576148ed614b05565b5b828201905092915050565b6000614904826149c8565b915061490f836149c8565b92508261491f5761491e614b34565b5b828204905092915050565b6000614935826149c8565b9150614940836149c8565b92508282101561495357614952614b05565b5b828203905092915050565b6000614969826149a8565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015614a135780820151818401526020810190506149f8565b83811115614a22576000848401525b50505050565b60006002820490506001821680614a4057607f821691505b60208210811415614a5457614a53614b63565b5b50919050565b614a6382614c0e565b810181811067ffffffffffffffff82111715614a8257614a81614bc1565b5b80604052505050565b6000614a96826149c8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415614ac957614ac8614b05565b5b600182019050919050565b6000614adf826149c8565b9150614aea836149c8565b925082614afa57614af9614b34565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732314d657461646174613a204e6f6e6578697374656e7420746f6b6560008201527f6e00000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f746f6b656e49647320646f6573206e6f74206d6174636820726172697469657360008201527f206c656e67746800000000000000000000000000000000000000000000000000602082015250565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f6e6f74206f70657261746f720000000000000000000000000000000000000000600082015250565b614d908161495e565b8114614d9b57600080fd5b50565b614da781614970565b8114614db257600080fd5b50565b614dbe8161497c565b8114614dc957600080fd5b50565b614dd5816149c8565b8114614de057600080fd5b5056fea264697066735822122073ba417f9dadd775228366a14143133e43f1f055b26c42d8e29677c80187868664736f6c63430008070033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
