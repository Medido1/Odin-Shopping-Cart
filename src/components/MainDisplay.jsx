import { ArrowLeft, ArrowRight, Circle} from "lucide-react";
import { useEffect, useState } from "react";
import ItemDisplay from "./ItemDisplay";

function MainDisplay({data, height}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showNext(){
    if (currentIndex >= data.length -1){
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function showPrevious() {
    if (currentIndex === 0){
      setCurrentIndex(data.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight"){
        showNext();
      } else if (e.key === "ArrowLeft"){
        showPrevious();
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex])

  return (
    <>
      <div 
      className={`relative w-[90vw] h-[650px] rounded-2xl bg-white 
        flex flex-col items-center`}
      >
        <ItemDisplay  data={data} currentIndex={currentIndex}/>
        <button 
          className="absolute top-[50%] translate-y-[-50%]
            left-0 text-2xl rounded-full p-2 bg-black/20 text-white"
          onClick={showPrevious}
          aria-label="show previous"   
        >
          <ArrowLeft />
        </button>
        <button 
          className="absolute top-[50%] translate-y-[-50%]
            right-0 text-2xl rounded-full p-2 bg-black/20 text-white"
          onClick={showNext}
          aria-label="show next"
        >
          <ArrowRight/>
        </button>
      </div>
      <div className='flex gap-2 top-4 justify-center py-2'>
        {data.map((item, index )=> (
          <div className='mb-10' key={index}>
            <Circle 
              onClick={() =>setCurrentIndex(index)} 
              className={index === currentIndex ? 'bg-black rounded-full duration-75' : ''}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default MainDisplay;