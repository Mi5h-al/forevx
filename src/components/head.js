import React, { useState } from "react";
import logoforev from "../images/logoforev.png"

const Head = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () =>{setShowMenu(!showMenu)};

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
        <img src={logoforev} className="w-20" alt="logo" />
        <h1 className="text-6xl font-medium italic bg-clip-text text-transparent bg-gradient-to-r from-[#1c75bc] to-cyan-500">
          ForEV</h1>
        </div>


        <div>
          <button
            id="mobile-open-button"
            className="text-3xl md:hidden cursor-pointer"
            onClick={()=>handleOpenMenu()}
          >
          &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <a href="#hero" className="hover:opacity-90">
              Home
            </a>
            <a href="#technology" className="hover:opacity-90">
            Technology
            </a>
            <a href="#downloads" className="hover:opacity-90">
            Downloads
            </a>
            <a href="#contactus" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
      {showMenu ?
        <section
          id="mobile-menu"
          className="absolute top-0 bg-black w-full text-white text-2xl flex flex-col justify-content-center origin-top animate-open-menu"
        >
          <button className="text-8xl self-end px-6" 
          onClick={()=>handleOpenMenu()}>
            &times;
            </button>
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
            onClick={()=>handleOpenMenu()}
          >
            <a
              href="#hero"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={()=>handleOpenMenu()}
            >
              Home
            </a>
            <a
              href="#technology"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={()=>handleOpenMenu()}
            >
              Technology
            </a>
            <a
              href="#downloads"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={()=>handleOpenMenu()}
            >
              Download App
            </a>
            <a
              href="#contactus"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={()=>handleOpenMenu()}
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full text-center py-6 hover:opacity-90"
              onClick={()=>handleOpenMenu()}
            >
              Legal
            </a>
          </nav>
        </section>
       : null}
    </header>
  );
};

export default Head;
