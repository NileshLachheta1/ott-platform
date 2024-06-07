import { useState } from "react";
import FormComponent from "./components/FormComponent/FormComponent.jsx";
import NavbarComponent from "./components/Navbar/NavbarComponent.jsx";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import LogoComponent from "./components/LogoComponent/LogoComponent.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent.jsx";
import FeedbackComponent from "./components/FeedbackComponent/FeedbackComponent.jsx";
import AboutUsComponent from "./components/AboutUsComponent/AboutUsComponent.jsx";
import HowWeWorkComponent from "./components/HowWeWorkComponent/HowWeWorkComponent.jsx";
function App() {

  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <AboutUsComponent />
      <FormComponent />
      <LogoComponent />
      <FeedbackComponent />
      <HowWeWorkComponent/>
      <FooterComponent />
    </>
  );
}

export default App;
