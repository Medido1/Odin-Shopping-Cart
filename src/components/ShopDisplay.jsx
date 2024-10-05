import { Star, ShoppingBasket } from "lucide-react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function ShopDisplay({data, title}) {
  const { addItem } = useContext(GlobalContext);
  function renderStars(rating) {
    const stars = [];
    for (let i =0; i < 5; i++){
      if (rating > i) {
        stars.push(
        <Star key={i} fill="gold" className="text-amber-200"/>
        )
      }
    }
    if (stars.length < 5) {
      for (let i = stars.length; i < 5; i++){
        stars.push(
          <Star key={i} className="text-amber-300"/>
        )
      }
    }
    return stars;
  }
  return (
    <div className="w-[100vw] p-4 flex flex-col items-center">
      <h2 className="text-white text-2xl text-center mb-4 font-bold">
        {title}
      </h2>
      <ul
        className="grid sm:grid-cols-2 sm:gap-4 
          lg:grid-cols-3"  
      >
        {data.map((category) => {
          return <li
            className="flex flex-col gap-4  max-w-[300px]
             border-b border-black p-4 bg-white mb-4 rounded-3xl
             relative"  
            key={category.title}
            >
            <h3 className="text-center">
              {category.title}
            </h3>
            <img src={category.image}/>
            <p className="text-center">{category.description}</p>
            <div 
              className="w-full flex justify-between self-start px-4 mt-4"
            >
              <p className="text-lg font-bold">
                {`${category.price}$`}
              </p>
              <ul className="flex gap-2">
                {renderStars(Math.ceil(category.rating.rate))}
              </ul>
            </div>
            <button
              className="flex gap-4 border border-black
              px-4 py-2 bg-slate-100 rounded-lg self-center"
              onClick={() => 
                addItem({
                  title: category.title, 
                  price: category.price,
                  image: category.image,
                  number : 1})}
            >
              <p>Add to cart</p>
            <ShoppingBasket />
            </button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ShopDisplay;