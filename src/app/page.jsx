import Homep from "./components/homep";
import About from "./components/about";
import Blog from "./components/blog";
import Empower from "./components/empower";
import Event from '@/app/components/event';
import Hero from "./components/Hero";

export default function Home() {
  
  return (
    <div className="overflow-x-hidden">
      <Homep heading="Dukataze Organization" message="Welcomes you" />
        <Hero/>
      <About />
      <Empower />
      <Blog />
      <Event query={{sort: 'desc', limit: 4}} />
    </div>
  );
}
