import { ShoppingCart } from 'lucide-react';

function HeaderCart({setIsCartOpen}){
  return (
    <div className='flex gap-4 sticky top-[500px] p-2 rounded-md'
      style={{backgroundColor: "rgba(248, 248, 248, .5)"}}
    >
      <ShoppingCart />
      <p>: 0 items</p>
      <button 
        className='text-white border-b border-white'
        onClick={() => setIsCartOpen(true)}
        >
        See Cart
      </button>
    </div>
  )
}

export default HeaderCart;