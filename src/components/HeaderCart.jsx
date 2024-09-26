import { ShoppingCart } from 'lucide-react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

function HeaderCart(){
  const { state } = useContext(GlobalContext);
  return (
    <div className='flex justify-around sticky top-[500px] p-2 rounded-md'
      style={{backgroundColor: "rgba(248, 248, 248, .5)"}}
    >
      <p>{`${state.totalItems} ${state.totalItems === 1 ? "Item" :"items"}`}</p>
      <p>Total: </p>
      <ShoppingCart />

    </div>
  )
}

export default HeaderCart;