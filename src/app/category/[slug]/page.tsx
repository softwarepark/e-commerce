import { getProductFromCategory } from "@/api/products";
import { PageHeader } from "@/ui/molecules/PageHeader";
import ProductList from "@/ui/organisms/ProductList";
import { notFound } from "next/navigation";
import React from "react";

const ProductFromCategoryPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await getProductFromCategory(slug);
  const products = data[0]?.products;
  const category = data[0];

  if (!products || !category) {
    throw notFound();
  }

  return (
    <section className="flex flex-col gap-14">
      <PageHeader category={category} />
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
};

export default ProductFromCategoryPage;
