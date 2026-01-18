import Hero from "./(landing)/components/home/hero";
import Categories from "./(landing)/components/home/categories";
import Products from "./(landing)/components/home/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}
