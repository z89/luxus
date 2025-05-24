import { ethers } from "ethers";
import { MINT_ADDRESS, MINT_ABI, CONTROL_ADDRESS, CONTROL_ABI } from "@/lib/constants";
// import { createQRCodeInstance } from "@/app/qr/generation/generator";
// import { uploadQRCodeToIPFS } from "@/app/qr/generation/ipfsUpload";

// export async function mintProduct(
//   form: { brand: string; serialNumber: string; productType: string; material: string },
//   signer: ethers.Signer,
//   setStatus: (s: string | null) => void
// ): Promise<bigint> {
//   const { brand, serialNumber, productType, material } = form;

//   const mintContract = new ethers.Contract(MINT_ADDRESS, MINT_ABI, signer);
//   const txResponse = await mintContract.mint(brand, serialNumber, productType, material);

//   setStatus("Waiting for mint confirmation...");
//   const receipt = await txResponse.wait();

//   if (!receipt) throw new Error("Minting transaction failed.");

//   for (const log of receipt.logs) {
//     try {
//       const parsed = mintContract.interface.parseLog(log);
//       if (parsed?.name === "Minted") {
//         return parsed.args.tokenId;
//       }
//     } catch {
//       // skip unparseable logs
//     }
//   }

//   throw new Error("Token ID not found in event logs.");
// }
export async function mintProduct(
  form: { brand: string; serialNumber: string; productType: string; material: string },
  signer: ethers.Signer
): Promise<{ tokenId: bigint; txHash: string }> {
  const { brand, serialNumber, productType, material } = form;

  const mintContract = new ethers.Contract(MINT_ADDRESS, MINT_ABI, signer);
  const txResponse = await mintContract.mint(brand, serialNumber, productType, material);

  const receipt = await txResponse.wait();
  console.log("receipt: ", receipt);

  if (!receipt) throw new Error("Minting transaction failed.");

  for (const log of receipt.logs) {
    try {
      const parsed = mintContract.interface.parseLog(log);
      if (parsed?.name === "Minted") {
        return {
          tokenId: parsed.args.tokenId,
          txHash: receipt.hash,
        };
      }
    } catch {
      // skip unparseable logs
    }
  }

  throw new Error("Token ID not found in event logs.");
}

export async function registerProduct(tokenId: bigint, signer: ethers.Signer, ipfsUrl: string): Promise<string> {
  const controlContract = new ethers.Contract(CONTROL_ADDRESS, CONTROL_ABI, signer);

  const registerTx = await controlContract.register(tokenId, ipfsUrl);
  await registerTx.wait();

  return registerTx.hash;
}

// export async function mintAndRegisterProduct(
//   form: { brand: string; serialNumber: string; productType: string; material: string },
//   setStatus: (s: string | null) => void,
//   setError: (e: string | null) => void,
//   setTx: (tx: string | null) => void
// ): Promise<void> {
//   const { brand, serialNumber, productType, material } = form;

//   if (!brand || !serialNumber || !productType || !material) {
//     setError("All fields including QR code are required.");
//     return;
//   }

//   try {
//     setStatus("Connecting to wallet...");
//     setError(null);

//     if (typeof window === "undefined" || !window.ethereum) {
//       throw new Error("MetaMask not detected");
//     }

//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();

//     const tokenId = await mintProduct(form, signer, setStatus);
//     console.log("✅ Minted token ID:", tokenId.toString());

//     const qrCode = createQRCodeInstance("999999999");

//     const url = await uploadQRCodeToIPFS(qrCode);

//     const txHash = await registerProduct(tokenId, signer, setStatus, url);

//     setStatus("✅ Product minted and registered successfully!");
//     setTx(txHash);
//   } catch (err) {
//     const error = err as { code?: string; message: string };
//     const code = error.code;
//     const message = error.message;

//     if (code === "ACTION_REJECTED") {
//       setError("❌ You cancelled the transaction.");
//     } else {
//       setError(`❌ Error: ${message}`);
//     }

//     setStatus(null);
//   }
// }
