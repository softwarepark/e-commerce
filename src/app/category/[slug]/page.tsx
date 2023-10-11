import { getProductFromCategory } from "@/api/products";
import { PageHeader } from "@/ui/molecules/PageHeader";
import ProductList from "@/ui/organisms/ProductList";
import { SectionProductList } from "@/ui/organisms/SectionProductList";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

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
      <SectionProductList
        addTitle={false}
        title={category.name}
        products={products}
        numberOfItem={8}
      />
    </section>
  );
};

export default ProductFromCategoryPage;
