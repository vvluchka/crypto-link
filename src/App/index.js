import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import CurrencyCards from "../components/CurrencyCards";
import DebitCard from "../components/DebitCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <CurrencyCards />
      <DebitCard />
    </div>
  );
}

export default App;
