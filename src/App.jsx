import { useState, useEffect } from "react";
import Header from "./components/Header"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      <Header isMobile={isMobile}/>
    </>
  )
}

export default App
