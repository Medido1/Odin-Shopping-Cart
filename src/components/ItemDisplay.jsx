import { Star } from "lucide-react";
import { useState } from "react";

function ItemDisplay({data, currentIndex}) {
  const [isShown, setIsShown] = useState(false);
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

  return (
    <div 
      className="w-full h-full flex flex-col items-center gap-4 
      transition-opacity duration-500 ease-in-out opacity-100"
      key={currentIndex}
      onTouchStart={toggleDescription}
      >
        <h2 className="text-xl text-center font-bold pt-4">
          {data[currentIndex].title}
        </h2>
        <img 
          src={data[currentIndex].image} 
          className="w-[80%] h-[50%]"
        />
        <div className="text-center text-sm px-2">
          {isShown ? 
            <p className="bg-white w-full absolute 
            left-0 top-[40%] shadow-lg rounded-md">
              {data[currentIndex].description}
            </p> 
            :
            <p>
              {truncateDescription(data[currentIndex].description, 250)}
            </p>
          }
        </div>
        <div 
          className="w-full flex justify-between self-start px-4 mt-4
          absolute bottom-4
        ">
          <p className="text-lg font-bold">
            {`${data[currentIndex].price}$`}
          </p>
          <ul className="flex gap-2">
            {renderStars(Math.ceil(data[currentIndex].rating.rate))}
          </ul>
        </div>
      </div>
  )
}

export default ItemDisplay;