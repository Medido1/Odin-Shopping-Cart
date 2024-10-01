import { Link } from "react-router-dom";

function MobileMenu({isMenuOpen, setIsMenuOpen}) {
  function closeMenu(){
    setIsMenuOpen(false);
  }

  return (
    <div className={`w-[90vw] max-w-[500px] p-4 absolute
     left-[5%] rounded-lg shadow-lg transition-[top] duration-1000 ease-in-out 
     ${isMenuOpen ? "top-[15%]": "top-[-100%]"}`}
     style={{backgroundColor: "rgba(248,248,248, .5)"}}
     role="menu"
     id="mobileMenu"
    >
      <ul className="flex flex-col items-center gap-2 font-bold">
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