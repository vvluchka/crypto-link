import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import CurrencyCards from "../components/CurrencyCards";
import CurrencyData from "../CurrencyData";
import DebitCard from "../components/DebitCard";

function App() {
  const cards = CurrencyData.map((card) => {
    return <CurrencyCards key={card.id} card={card} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <div className="grid">{cards}</div>
      <DebitCard />
    </div>
  );
}

export default App;
