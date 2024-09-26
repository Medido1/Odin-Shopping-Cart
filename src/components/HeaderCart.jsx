import { ShoppingCart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

function HeaderCart(){
  const { state } = useContext(GlobalContext);
  return (
    <div className='w-[90vw] flex justify-around fixed top-[500px]
     p-2 rounded-md z-10 bg-slate-300'

    >
      <p>{`${state.totalItems} ${state.totalItems === 1 ? "Item" :"items"}`}</p>
      <p>Total: {`${state.totalPrice}$`}</p>
      <ShoppingCart />
    </div>
  )
}

export default HeaderCart;