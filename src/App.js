import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import {Hero} from './components/hero/Hero'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
    </div>
  );
}

export default App;
