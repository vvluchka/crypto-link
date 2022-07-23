
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
