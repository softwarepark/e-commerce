import { getProductById } from "@/api/products";
import ProductSingleDescription from "@/ui/atoms/ProductSingleDescription";
import ProductSingleImage from "@/ui/atoms/ProductSingleImage";
import LoadingItems from "@/ui/molecules/LoadingItems";
import SuggestedProductsList from "@/ui/organisms/SuggestedProductsList";
import formatMoney from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = await getProductById(params.productId);
  return {
    title: `${product.title} - ${formatMoney(
      product.price / 100
    )} - Sklep internetowy`,
    description: `${product.description}`,
    openGraph: {
      title: `${product.title} - ${formatMoney(product.price / 100)}`,
      description: `${product.description}`,
      images: [product.coverImage.src],
    },
  };
};

export default async function SingleProduct({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);

  return (
    <div className="w-full space-y-9">
      <article className="flex md:flex-row flex-col w-full gap-10">
        <ProductSingleImage
          src={product.coverImage.src}
          alt={product.coverImage.alt}
        />
        <ProductSingleDescription product={product} />
      </article>
      <aside>
        <Suspense fallback={<LoadingItems numberOfItem={4} />}>
          <SuggestedProductsList />
        </Suspense>
      </aside>
    </div>
  );
}
