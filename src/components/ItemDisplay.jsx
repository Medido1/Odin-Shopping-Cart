import { Star, ShoppingBasket } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

function ItemDisplay({data, currentIndex}) {
  const [isShown, setIsShown] = useState(false);
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

  function truncateDescription(description, maxLength = 100) {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  }

  function toggleDescription() {
    setIsShown(!isShown)
  }

  const currentItem = data[currentIndex];

  return (
    <div 
      className="w-full h-full flex flex-col items-center gap-4 
      transition-opacity duration-500 ease-in-out opacity-100"
      key={currentIndex}
      >
        <h2 className="text-xl text-center font-bold pt-4">
          {currentItem.title}
        </h2>
        <img 
          src={currentItem.image} 
          className="w-[80%] h-[50%]"
        />
        <div 
          className="text-center text-sm px-2"
          onTouchStart={toggleDescription}
        >
          {isShown ? 
            <p className="bg-white w-full absolute 
            left-0 top-[40%] shadow-lg rounded-md p-4">
              {currentItem.description}
            </p> 
            :
            <p>
              {truncateDescription(currentItem.description, 200)}
            </p>
          }
        </div>
        <div 
          className="w-full flex justify-between self-start px-4 mt-4
          absolute bottom-16
        ">
          <p className="text-lg font-bold">
            {`${currentItem.price}$`}
          </p>
          <ul className="flex gap-2">
            {renderStars(Math.ceil(currentItem.rating.rate))}
          </ul>
        </div>
        <button
          className="flex gap-4 absolute bottom-5 border border-black
          px-4 py-2 bg-slate-100 rouned-lg"
          onClick={() => 
            addItem({
              title: currentItem.title, 
              price: currentItem.price,
              image: currentItem.image,
              number : 1})}
      >
          <p>Add to cart</p>
          <ShoppingBasket />
        </button>
      </div>
  )
}

export default ItemDisplay;