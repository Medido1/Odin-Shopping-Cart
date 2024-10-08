import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="flex justify-between p-6 bg-black">
      <p className="font-bold text-white">Medidoss express</p>
      <nav className='flex border-white gap-4'>
        <Facebook className='text-white cursor-pointer hover:text-gray-400'/>
        <Instagram className='text-white cursor-pointer hover:text-gray-400'/>
        <Twitter className='text-white cursor-pointer hover:text-gray-400'/>
      </nav>
    </footer>
  )
}

export default Footer;