import { ShoppingCart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

function HeaderCart(){
  const { state, toggleCart} = useContext(GlobalContext);

  return (
    <div className={`w-[90vw] flex justify-around fixed 
     p-2 rounded-md z-10 bg-slate-300 transition-[top] duration-1000 ease-in-out
     ${state.showCart ? "top-2 " : "top-[500px]"}
     lg:top-[580px] xl:top-[580px]`
    }
    >
      <p>{`${state.totalItems} ${state.totalItems === 1 ? "Item" :"items"}`}</p>
      <p>Total: {`${(state.totalPrice).toFixed(2)}$`}</p>
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