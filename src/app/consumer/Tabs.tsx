"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OwnedProducts from "../OwnedProducts";

export default function ConsumerTabs() {
  return (
    <div className="w-full p-6">
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-6">
          <TabsTrigger value="products">Owned Products</TabsTrigger>
          <TabsTrigger value="verify">Verify Product</TabsTrigger>
        </TabsList>

        <TabsContent className="flex items-center justify-center" value="products">
          <OwnedProducts />
        </TabsContent>
        <TabsContent value="verify">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>Verification panel goes here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
