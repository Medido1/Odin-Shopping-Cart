import MainDisplay from "./MainDisplay";
import { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';


function HomePage() {
  const { data } = useOutletContext()

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

  const categories = [
    { label: "Men's Clothing", data: menClothing },
    { label: "Women's Clothing", data: womensClothing },
    { label: "Jewelry", data: jewelery },
    { label: "Electronics", data: electronics },
  ];

  return (
    <div>
      {categories.map((category) =>
        category.data.length > 0 && (
          <MainDisplay 
            key={category.label}
            data={category.data}
          />
        )
      )}
    </div>
  )
}

export default HomePage;