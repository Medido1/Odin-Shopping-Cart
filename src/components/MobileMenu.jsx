import { Link } from "react-router-dom";

function MobileMenu({isMenuOpen, setIsMenuOpen}) {
  function closeMenu(){
    setIsMenuOpen(false);
  }

  return (
    <div className={`w-[90vw] max-w-[600px] p-4 absolute
     left-[5%] rounded-lg shadow-lg transition-[top] duration-1000 ease-in-out 
     bg-mobileMenu
     ${isMenuOpen ? "top-[15%]": "top-[-100%]"}
     md:top-[10%] md:static md:shadow-none md:bg-transparent md:w-[200px]`}
  
     role="menu"
     id="mobileMenu"
    >
      <ul 
        className="flex flex-col items-center gap-2 font-bold
          md:flex-row md:text-white md:gap-4">
        <li>
          <Link 
            to="/"
            onClick={closeMenu}
            >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="shop"
            onClick={closeMenu}
            >
            Shop
          </Link>
        </li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}

export default MobileMenu;