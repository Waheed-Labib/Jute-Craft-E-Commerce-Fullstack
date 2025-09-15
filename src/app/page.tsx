import Categories from "./components/home-page/sections/Categories";
import FeaturedProducts from "./components/home-page/sections/FeaturedProducts";
import Hero from "./components/home-page/sections/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
