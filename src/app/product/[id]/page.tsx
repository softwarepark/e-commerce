import { getSingleProductById } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProducDetails";
import { formatMoney } from "@/utils";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const product = await getSingleProductById(params.id);
  return {
    title: `${product?.name} - ${formatMoney(product?.price ?? 0)}`,
    description: `${product?.descriptionShort}`,
    openGraph: {
      title: `${product?.name} - ${formatMoney(product?.price ?? 0)}`,
      description: `${product?.descriptionShort}`,
      images: [product.images[0]?.url ?? ""],
    },
  };
};

export default async function SingleProduct({
  params: { id },
}: {
  params: { id: string };
}) {
  const singleProduct = await getSingleProductById(id);

  return <ProductDetails product={singleProduct} />;
}
