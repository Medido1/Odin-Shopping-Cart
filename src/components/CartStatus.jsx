import { X } from 'lucide-react';
import { GlobalContext } from '../context/GloblatState';
import { useContext } from 'react';

function CartStatus({isCartOpen, setIsCartOpen}) {
  const { state } = useContext(GlobalContext);
  
  return (
    <div className={`flex justify-between p-2 bg-slate-50 w-[90vw]
      absolute rounded-sm transition-[bottom] duration-1000 ease-in-out
      ${isCartOpen ? "bottom-[4%]" : "bottom-[-100%]"}`}>
      <p>Items N°:{state.totalItems}</p>
      <p>Total: </p>
      <X onClick={() => setIsCartOpen(false)}/>
    </div>
  )
}

export default CartStatus;