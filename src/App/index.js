import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Swap from "../components/Swap";
import MultiChain from "../components/MultiChain";
import CurrencyCards from "../components/CurrencyCards";
import DebitCard from "../components/DebitCard";
import ScrollToTop from "../components/ScrollToTop";
import StartTutorial from "../components/StartTutorial";
import Footer from "../components/Footer";
import ModalWindow from "../components/ModalWindow";

function App() {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  useEffect(() => {
    if (modalIsOpened) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalIsOpened])

  const openModal = () => {
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  }

  return (
    <>
      <Navbar />
      <Hero openModal={openModal}/>
      <Swap openModal={openModal}/>
      <MultiChain />
      <CurrencyCards />
      <DebitCard />
      <ScrollToTop />
      <StartTutorial />
      <Footer />
      <ModalWindow isOpened={modalIsOpened} closeModal={closeModal}  />
    </>
  );
}

export default App;
