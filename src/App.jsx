import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ExtraCurricular from "./components/ExtraCurricular"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 bg-
            [linear-gradient(to_right,#f4f4f2e_1px,transparent_1px),
            linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-
            [size:14px_24px]"></div>
          <div
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Education />
        <Technologies />
        <Projects />
        <ExtraCurricular/>
        <Contact />
      </div>
    </div>
  );
};

export default App