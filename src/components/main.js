import React from "react";
import Head from "./head";
import Body from "./body";
import Footer from "./footer";

const Main = () => {

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
      <div className="min-h-screen bg-white dark:bg-black dark:text-white">
        <Head scrollToSection={scrollToSection} />

        <Body scrollToSection={scrollToSection} />

        <Footer scrollToSection={scrollToSection}/>
      </div>
  );
};

export default Main;
