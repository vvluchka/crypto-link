import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Swap from "../components/Swap";
import MultiChain from "../components/MultiChain";
import CurrencyCards from "../components/CurrencyCards";
import DebitCard from "../components/DebitCard";
import ScrollToTop from "../components/ScrollToTop";
import StartTutorial from "../components/StartTutorial";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Swap />
      <MultiChain />
      <CurrencyCards />
      <DebitCard />
      <ScrollToTop />
      <StartTutorial />
      <Footer />
    </>
  );
}

export default App;
