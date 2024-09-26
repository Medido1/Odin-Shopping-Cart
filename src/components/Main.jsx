import { useEffect, useState } from "react";
import MainDisplay from "./MainDisplay";

function Main({data}) {
  const [menClothing, setMenClothing] = useState([]);

  useEffect(() => {
    if (data && data.length) {
      setMenClothing(data.filter(info => info.category === "men's clothing"))
    }
  }, [data])

  return (
    <main className="bg-gray-400 py-10 px-5 flex flex-col items-center">
      {menClothing.length > 0 && (
        <MainDisplay 
          data={menClothing}/>
      )}
    </main>
  )
  
}

export default Main;