import Hero from "./(landing)/components/home/hero";
import Categories from "./(landing)/components/home/categories";
import Products from "./(landing)/components/home/products";
import { getAllCategories } from "./services/category.service";
import { getAllProducts } from "./services/products.service";

export default async function Home() {
  const responseCategories = await getAllCategories();
  const responseProducts = await getAllProducts();
  return (
    <div className="py-20">
      <Hero />
      <Categories categories={responseCategories} />
      <Products products={responseProducts} />
    </div>
  );
}
