import { ShoppingCart } from 'lucide-react';

function HeaderCart(){
  return (
    <div className='flex gap-4 sticky top-[500px] p-2 rounded-md'
      style={{backgroundColor: "rgba(248, 248, 248, .5)"}}
    >
      <ShoppingCart />
      <p>: 0 items</p>
      <a href="" className='text-white border-b border-white'>See Cart</a>
    </div>
  )
}

export default HeaderCart;