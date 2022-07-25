
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import CurrencyCards from "./components/CurrencyCards/CurrencyCards";
import CurrencyData from "./CurrencyData";


function App() {

  const cards = CurrencyData.map(card => {
    return <CurrencyCards 
              key = {card.id}
              card = {card}
            />
  })


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <div className="grid">
        {cards}
      </div>
    </div>
  );
}

export default App;
