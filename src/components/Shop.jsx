import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ShopDisplay from './ShopDisplay';

function Shop(){
  const { data } = useOutletContext();
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
    <div className=' w-full'>
      <h2 className='text-white text-2xl font-bold px-2 py-4'>
        Medidoss express
      </h2>
      <div>
      {categories.map((category) =>
        category.data.length > 0 && (
          <ShopDisplay 
            key={category.label}
            data={category.data}
            title={category.label}
          />
        )
      )}
    </div>
    </div>
  )
}

export default Shop;