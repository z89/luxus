"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OwnedProducts from "../OwnedProducts";
import Transfer from "../manufacturer/transfer/Transfer";
import Verify from "../manufacturer/verify/Verify";

export default function ConsumerTabs() {
  return (
    <div className="w-full p-6">
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
          <TabsTrigger value="products">Owned Products</TabsTrigger>
          <TabsTrigger value="transfer">Transfer Product</TabsTrigger>
          <TabsTrigger value="verify">Verify Product</TabsTrigger>
        </TabsList>

        <TabsContent className="flex items-center justify-center" value="products">
          <OwnedProducts />
        </TabsContent>
        <TabsContent className="flex items-center justify-center" value="transfer">
          <Transfer />
        </TabsContent>
        <TabsContent className="flex items-center justify-center" value="verify">
          <Verify />
        </TabsContent>
      </Tabs>
    </div>
  );
}
