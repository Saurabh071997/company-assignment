import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import { Hero } from "./components/hero/Hero";
import { Features } from "./components/features/Features";
import { Team } from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Team />
    </div>
  );
}

export default App;
