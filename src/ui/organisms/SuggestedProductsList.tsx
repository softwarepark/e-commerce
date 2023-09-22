import { getAllProducts } from "@/api/products";
import ProductList from "./ProductList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SuggestedProductsList = async () => {
  const length = 4;
  const offset = 0;
  const products = await getAllProducts();
  await sleep(5000);
  return <ProductList products={products.slice(-4)} />;
};

export default SuggestedProductsList;
