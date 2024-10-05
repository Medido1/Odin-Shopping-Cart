import { useState, useEffect } from "react";
import headerBg from '../assets/headerBg.webp';
import MobileMenu from "./MobileMenu";
import { Menu, X } from 'lucide-react';
import HeaderCart from "./HeaderCart";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className="relative p-5 bg-cover min-h-[500px] flex flex-col "
      style={{backgroundImage: `url(${headerBg})`}}
    >
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-white">
          Medidoss
        </p>
        <button
          aria-label='toggle menu button'
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          className="md:hidden"
        >
          {isMenuOpen ? <X color="white"/> : <Menu color="white"/>}
        </button>
        <MobileMenu 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <h1 
        className="text-3xl text-white font-bold border border-white text-center
          p-4 mt-40 max-w-[600px] self-center">
        Medidoss express
      </h1>
        <HeaderCart/>
    </header>
  )
}

export default Header;