import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Hero } from "./components/hero/Hero";
import { Features } from "./components/features/Features";
import { Team } from "./components/team/Team";
import { Project } from "./components/project/Project";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Team />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
