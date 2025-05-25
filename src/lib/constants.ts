export const MINT_ADDRESS = "0x10c8549c5101f53534BfB2EAc63B864A19655C23";
export const CONTROL_ADDRESS = "0x60dCE9E431cA7A0c376C6B4bb546006a6AbcfdF9";
export const SALE_ADDRESS = "0x7d8fAeFcc085da2d838ca1B6984B07bEA661991a";

export const MINT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "brand",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "serialNumber",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "productType",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "material",
        "type": "string",
      },
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "Minted",
    "type": "event",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_controlContract",
        "type": "address",
      },
    ],
    "name": "setControlContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_saleContract",
        "type": "address",
      },
    ],
    "name": "setSaleContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "approvedOperators",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "controlContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "getMetadata",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "manufacturer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "saleContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "tokenCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "tokenMetadata",
    "outputs": [
      {
        "internalType": "string",
        "name": "brand",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "serialNumber",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "productType",
        "type": "string",
      },
      {
        "internalType": "string",
        "name": "material",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "tokenOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];

export const CONTROL_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "verifier",
        "type": "address",
      },
    ],
    "name": "addVerifier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mintAddress",
        "type": "address",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
    ],
    "name": "OwnershipTransferred",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "qrCode",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "ProductRegistered",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "verifier",
        "type": "address",
      },
    ],
    "name": "ProductVerified",
    "type": "event",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "string",
        "name": "qrCode",
        "type": "string",
      },
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_saleContract",
        "type": "address",
      },
    ],
    "name": "setSaleContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "verify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "name": "authorisedVerifiers",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "getHistory",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "getOwnedTokenIds",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "manufacturer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "mintContract",
    "outputs": [
      {
        "internalType": "contract ISimpleMint",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "tokenID",
        "type": "uint256",
      },
      {
        "internalType": "string",
        "name": "qrCode",
        "type": "string",
      },
      {
        "internalType": "bool",
        "name": "verified",
        "type": "bool",
      },
      {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "saleContract",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "tokenIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];

export const SALE_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mintAddress",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "_controlAddress",
        "type": "address",
      },
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productName",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "seller",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256",
      },
    ],
    "name": "ProductListed",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productName",
        "type": "string",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256",
      },
    ],
    "name": "ProductTransferred",
    "type": "event",
  },
  {
    "inputs": [],
    "name": "control",
    "outputs": [
      {
        "internalType": "contract IControl",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address",
      },
    ],
    "name": "directTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "manufacturer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "mint",
    "outputs": [
      {
        "internalType": "contract ISimpleMint",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string",
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256",
      },
    ],
    "name": "sale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address",
      },
    ],
    "name": "saleTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "sales",
    "outputs": [
      {
        "internalType": "string",
        "name": "productName",
        "type": "string",
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256",
      },
      {
        "internalType": "bool",
        "name": "isActive",
        "type": "bool",
      },
      {
        "internalType": "address",
        "name": "seller",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
];
