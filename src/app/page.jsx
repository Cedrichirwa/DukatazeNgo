import Homep from "./components/homep";
import About from "./components/about";
import Blog from "./components/blog";
import Empower from "./components/empower";
import Event from '@/app/components/event';

export default function Home() {
  return (
    <>
      <Homep heading="Dukataze Organization" message="Welcomes you" />

      <About />
      <Empower />
      <Blog />
      <Event query={{sort: 'desc', limit: 4}} />
    </>
  );
}
