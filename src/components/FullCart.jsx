import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect} from "react";
import emptyCartImg from '../assets/emptycart.png';
import ConfirmedOrder from "./ConfirmedOrder";
import { BadgeX } from 'lucide-react';

function FullCart({showCart}) {
  const { state, confirmOrder, deleteOrder} = useContext(GlobalContext);
  const totalNumber = state.items.length;

  function handleOpen() {
    confirmOrder();
  }

  if (showCart) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  
  return (
    <div 
      className={`fixed bg-slate-200 w-full max-w-[600px] h-full p-4 top-0 
      shadow-2xl flex flex-col overflow-y-auto
      z-10 transition-[left] duration-1000 ease-in-out
      ${showCart ? 'left-0' : 'left-[200%]'}`}>
        <h2 className="text-2xl font-bold text-center mb-4 pt-8">
          {`Your Cart (${totalNumber})`}
        </h2>
        {totalNumber === 0 && 
          <img 
            className="mt-4 self-center"
            src={emptyCartImg} 
            alt="empty cart image" />
        }
        {totalNumber > 0 &&
          <ul>
            {state.items.map((item) => {
              return <li 
                className="flex justify-between item-center mb-2
                pb-2  border-b border-black" 
                key={item.title}
                >
                <div className="max-w-[60%]">
                  <p>
                    {item.title} 
                  </p>
                  <div className="flex gap-4">
                    <p className="text-green-500">
                      x{item.number}
                    </p>
                    <p>
                      {item.price * item.number}$
                    </p>
                    <button
                      onClick={() => deleteOrder(item.title)}
                    >
                      <BadgeX />
                    </button>
                  </div>
                </div>
                <img 
                  className="h-10 w-10"
                  src={item.image} />
              </li>
            })}
          </ul>
        }
        <button 
          onClick={handleOpen}
          className="px-4 py-2 bg-red-400 text-md
           text-white rounded-full ">
          Confirm
        </button>
        {state.confirmed && <ConfirmedOrder />}
    </div>
  )
}

export default FullCart;