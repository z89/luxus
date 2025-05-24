import { MINT_ABI, MINT_ADDRESS, SALE_ADDRESS } from "@/lib/constants";
import { ethers } from "ethers";

export async function transferToken(to: string, tokenId: string, signer: ethers.JsonRpcSigner): Promise<string> {
  const nftContract = new ethers.Contract(MINT_ADDRESS, MINT_ABI, signer);

  const tx = await nftContract.approve(SALE_ADDRESS, tokenId); // Approve the SaleContract
  await tx.wait();

  console.log("Approval Tx Hash:", tx.hash);
  //   const saleContract = new ethers.Contract(SALE_ADDRESS, SALE_ABI, signer);

  //   const tx = await saleContract.approve();
  //   const tx = await saleContract.transfer(tokenId, to);
  //   await tx.wait();
  //   console.log("Transaction hash:", tx.hash);
  return tx.hash;
}
