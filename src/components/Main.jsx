import { useEffect, useState } from "react";
import MainDisplay from "./MainDisplay";

function Main({data, itemNumber, setItemNumber}) {
  const [menClothing, setMenClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    if (data && data.length) {
      setMenClothing(data.filter(info => info.category === "men's clothing"));
      setJewelery(data.filter(info => info.category === "jewelery" ));
      setElectronics(data.filter(info => info.category === "electronics"));
      setWomenClothing(data.filter(info => info.category === "women's clothing"));
    }
  }, [data])

  return (
    <main className="bg-gray-400 py-10 px-5 flex flex-col items-center">
      {menClothing.length > 0 && (
        <MainDisplay 
          data={menClothing}/>
      )}
      {womensClothing.length > 0 &&(
        <MainDisplay 
          data={womensClothing}/>
      )}
      {jewelery.length > 0 && (
        <MainDisplay 
          data={jewelery}/>
      )}
      {electronics.length > 0 && (
        <MainDisplay 
          data={electronics}/>
      )}
    </main>
  )
  
}

export default Main;