import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  async function getData() {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products',
        {mode: "cors"}
      );
      const fullData = await response.json();
      setData(fullData);
    } catch(err){
      console.log(err);
      return;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <Header isMobile={isMobile}/>
      <Main data = {data}/>
    </>
  )
}

export default App
