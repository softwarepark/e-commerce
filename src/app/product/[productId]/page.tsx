import { getSingleProductById } from "@/api/products";
import ProductSingleDescription from "@/ui/atoms/ProductSingleDescription";
import ProductSingleImage from "@/ui/atoms/ProductSingleImage";
import LoadingItems from "@/ui/molecules/LoadingItems";
import SuggestedProductsList from "@/ui/organisms/SuggestedProductsList";
import { ProductItemType } from "@/ui/types";
import formatMoney from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export default async function SingleProduct({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const singleProduct = await getSingleProductById(productId);

  return (
    <div className="w-full space-y-9 max-w-7xl">
      <article className="flex md:flex-row flex-col gap-10 ">
        {singleProduct.name}
      </article>
    </div>
  );
}
