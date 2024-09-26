import { useState } from "react";
import headerBg from '../assets/headerBg.webp';
import MobileMenu from "./MobileMenu";
import { Menu, X } from 'lucide-react';
import HeaderCart from "./HeaderCart";


function Header({isMobile}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className="relative p-5 bg-cover min-h-[500px] flex flex-col"
      style={{backgroundImage: `url(${headerBg})`}}
    >
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-white">
          Medidoss
        </p>
        {isMobile && 
          <>
            <button
              aria-label='toggle menu button'
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X color="white"/> : <Menu color="white"/>}
            </button>
            <MobileMenu isMenuOpen={isMenuOpen}/>
          </>
        }
      </div>
      <h1 
        className="text-2xl text-white font-bold border border-white text-center
          p-4 mt-40">
        Type something here
      </h1>
        <HeaderCart/>
    </header>
  )
}

export default Header;