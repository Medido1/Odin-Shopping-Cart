import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { GlobalContext } from "./context/GlobalState";
import FullCart from './components/FullCart';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <FullCart showCart={state.showCart}/>
      <Header isMobile={isMobile}/>
      <Main/>
      <Footer />
    </>
  )
}

export default App
