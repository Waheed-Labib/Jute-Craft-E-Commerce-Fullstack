import Categories from "./components/home-page/sections/Categories";
import FeaturedProducts from "./components/home-page/sections/FeaturedProducts";
import Hero from "./components/home-page/sections/Hero";
import WhyChooseUs from "./components/home-page/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
}
