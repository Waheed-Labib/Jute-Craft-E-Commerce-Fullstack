import Navbar from "./components/Header";
import Hero from "./components/home-page/Hero";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="text-primary">Hello, Next.js!</h1> */}
      <Navbar />
      <Hero />
    </div>
  );
}
