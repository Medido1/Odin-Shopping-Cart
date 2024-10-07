import { ShoppingCart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalState';
import { useContext, useEffect } from 'react';

function HeaderCart(){
  const { state, toggleCart} = useContext(GlobalContext);
  const totalNumber = state.items.reduce((acc, item) => {
    return acc + item.number
  }, 0);
  const totalPrice = state.items.reduce((acc, item) => {
    return acc + (item.price * item.number)
  }, 0)

  useEffect(() => {
    console.log(state.items)
  }, [state])

  return (
    <div className={`w-[90vw] flex justify-around fixed 
     p-2 rounded-md z-10 bg-slate-300 transition-[top] duration-1000 ease-in-out
     ${state.showCart ? "top-2 " : "top-[500px]"}
     lg:top-[580px] xl:top-[580px]`
    }
    >
      <p>{`${totalNumber} ${totalNumber === 1 ? "Item" :"items"}`}</p>
      <p>Total: {`${(totalPrice).toFixed(2)}$`}</p>
      <button 
        className='flex gap-2'
        onClick={toggleCart}
        >
        <ShoppingCart />
        <p className='text-black'>
          {state.showCart ? 'hide cart' : 'see cart'}
        </p>
      </button>
    </div>
  )
}

export default HeaderCart;