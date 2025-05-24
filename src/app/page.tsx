"use client";

// import { decodedTextAtom, QRCodeScanner } from "@/app/scanner/QRCodeScanner";
import { useAtomValue } from "jotai";
import { Gem } from "lucide-react";
import ConnectWalletButton from "./web3/ConnectWallet";
import { stakeholderTypeAtom } from "./atoms/wallet";
import ManufacturerTabs from "./manufacturer/Tabs";
import ConsumerTabs from "./consumer/Tabs";

export default function Home() {
  // const decodedText = useAtomValue(decodedTextAtom);
  const stakeholderType = useAtomValue(stakeholderTypeAtom);

  return (
    <div className="w-full h-full font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-full flex flex-col gap-x-10 ">
        <div className="flex flex-col gap-y-3 lg:flex-row items-center justify-between border-b lg:px-8 px-6 py-6">
          <div className="flex items-center gap-x-2">
            <Gem className="w-7 h-7 text-zinc-900" />
            <h1 className="text-[1.7rem] font-semibold  tracking-tight ">luxus</h1>
          </div>
          <ConnectWalletButton />
        </div>
        {/* {decodedText ? (
          <div className="flex flex-col items-center justify-center  gap-y-4">
            <p className="text-xl">
              <span className="font-bold">2.</span> Use the link below to verify the authenticity
            </p>
            <div className="flex items-center justify-center border p-6 border-zinc-400 rounded-lg">
              <a href={decodedText} className="text-blue-500 text-xl hover:underline">
                {decodedText}
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="text-xl">
              <span className="font-bold">1.</span> Scan your QR code of your luxury item
            </p>
            <div className="w-[400px] h-[300px]">
              <QRCodeScanner />
            </div>
          </div>
        )} */}
        {/* <div className="w-full p-6">
          <Tabs defaultValue={stakeholderType === "manufacturer" ? "mint" : "verify"} className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-6">
              {stakeholderType === "manufacturer" && <TabsTrigger value="mint">1. Mint Product</TabsTrigger>}
              {stakeholderType === "consumer" && <TabsTrigger value="verify">Verify Product</TabsTrigger>}
            </TabsList>

            {stakeholderType === "manufacturer" && (
              <TabsContent className="flex items-center justify-center" value="mint">
                <Mint />
              </TabsContent>
            )}

            {stakeholderType === "consumer" && (
              <TabsContent value="verify">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <p>Verification panel goes here</p>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div> */}
        <>
          {stakeholderType === "manufacturer" ? (
            <ManufacturerTabs />
          ) : stakeholderType === "consumer" ? (
            <ConsumerTabs />
          ) : (
            <div className="flex justify-center h-full my-8">
              <p className="text-lg text-zinc-600">Please connect your wallet to continue</p>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
