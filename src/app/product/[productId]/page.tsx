import { getSingleProductById } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProducDetails";
import formatMoney from "@/utils";
import { Metadata } from "next";

export default async function SingleProduct({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const singleProduct = await getSingleProductById(productId);

  return <ProductDetails product={singleProduct} />;
}
