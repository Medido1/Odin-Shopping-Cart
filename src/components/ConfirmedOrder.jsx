import { PackageCheck } from 'lucide-react';
import { GlobalContext } from "../context/GlobalState";
import { useContext } from 'react';

function ConfirmedOrder() {
  const { resetOrder } = useContext(GlobalContext);
  function returnHome() {
    resetOrder();
  }
  return (
    <div className="w-[90vw] h-[200px] bg-red-400 rounded-3xl
    absolute top-10 left-5 p-8 flex flex-col items-center">
        <div className='flex gap-4 items-center mb-4'>
          <PackageCheck />
          <h1 className='text-xl'>Order Confirmed!!</h1>
        </div>
        <p>Thanks for shopping with us</p>
        <button 
        onClick={resetOrder}
        className='mt-8 rounded-full bg-blue-100 px-4 py-2'>
          Home
        </button>
    </div>
  )
}

export default ConfirmedOrder;